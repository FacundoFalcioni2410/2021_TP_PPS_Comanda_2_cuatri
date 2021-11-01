import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
// import { admin } from "firebase-admin";


admin.initializeApp(functions.config().firebase);


exports.ingresoListaEspera = functions.firestore.document('clientes/{clienteID}').onUpdate((change, context) =>{
    const after = change.after.data();
    const promises: any = [];
    if(after.listaEspera === true)
    {
        let query = admin.firestore().collection('empleados').where('tipo', '==', 'metre');
        
        query.get().then(snapshot => {
            if(!snapshot.empty)
            {
                snapshot.forEach(doc =>{
                    let metre = doc.data();
                    const payload = {
                        token: metre.pushToken,
                        notification: {
                            title: 'Actualización en lista de espera',
                            body: 'Un cliente ha entrado a la lista de espera'
                        },
                        data:{
                            ruta: '/lista-espera'
                        }
                    };

                    const p = admin.messaging().send(payload);
                    promises.push(p);
                });
                return Promise.all(promises);
            }
            return null;
        });
    }
    return null;
});

exports.registroNotification = functions.firestore.document('clientes/{clienteID}').onCreate((snap, context) => {
    const nuevoCliente = snap.data();

    if(nuevoCliente.tipoCliente === 'estandar')
    {
        let query = admin.firestore().collection('supervisores');
        const promises: any = [];
        query.get().then(snapshot => {
            if(!snapshot.empty)
            {
                snapshot.forEach(doc =>{
                    let supervisor = doc.data();
                    const payload = {
                        token: supervisor.pushToken,
                        notification: {
                            title: 'Nuevo cliente',
                            body: 'Un cliente desea ingresar al local, habilitelo'
                        },
                        data:{
                            ruta: '/lista-cliente-deshabilitados'
                        }
                    };

                    const p = admin.messaging().send(payload);
                    promises.push(p);
                });
                return Promise.all(promises);
            }
            else
            {
                return null;
            }
        });
        return null;
    }
    return null;
});

exports.nuevoMensaje = functions.database.ref('/chat/{pushID}')
    .onCreate( (snapshot, context) =>{
        const mensaje = snapshot.val();
        const promises: any = [];
        if(mensaje.tipo === 'cliente')
        {
            let query = admin.firestore().collection('empleados').where('tipo', '==', 'mozo');
            let mesa = mensaje.user.mesaAsignada;
            query.get().then(snapshot =>{
                if(!snapshot.empty)
                {
                    snapshot.forEach(doc =>{
                        let mozo = doc.data();
                        const payload = {
                            token: mozo.pushToken,
                            notification: {
                                title: 'Nuevo mensaje',
                                body: `La mesa ${mesa} mando un mensaje`, 
                            },
                            data:{
                                ruta: '/chat'
                            }
                        };
    
                        const p = admin.messaging().send(payload);
                        promises.push(p);
                    });
                    return Promise.all(promises);
                }
                else
                {
                    return null;
                }
            });
        }
        return null;
    });