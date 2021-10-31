import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
// import { admin } from "firebase-admin";


admin.initializeApp(functions.config().firebase);


exports.ingresoListaEspera = functions.firestore.document('clientes/{clienteID}').onUpdate((change, context) =>{
    const after = change.after.data();
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

                    admin.messaging().send(payload).then((response) => {
                        // Response is a message ID string.
                        console.log('Successfully sent message:', response);
                        return {success: true};
                    }).catch((error) => {
                        return {error: error.code};
                    });
                });
            }
        });
    }
});

exports.registroNotification = functions.firestore.document('clientes/{clienteID}').onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    let query = admin.firestore().collection('empleados')

    query.get().then(snapshot => {
        if(!snapshot.empty)
        {
            snapshot.forEach(doc =>{
                let supervisor = doc.data();
                const payload = {
                    token: supervisor.pushToken,
                    notification: {
                        title: 'Nuevo cliente',
                        body: 'Un cliente desea ingresar al local, habilitelo para que pueda entrar'
                    },
                    data:{
                        ruta: '/lista-cliente-deshabilitados'
                    }
                };

                admin.messaging().send(payload).then((response) => {
                    // Response is a message ID string.
                    console.log('Successfully sent message:', response);
                    return {success: true};
                }).catch((error) => {
                    return {error: error.code};
                });
            });
        }
    });
});