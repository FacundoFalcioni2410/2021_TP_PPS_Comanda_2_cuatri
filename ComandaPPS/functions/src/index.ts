import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
// import { admin } from "firebase-admin";


admin.initializeApp(functions.config().firebase);

exports.nuevaReservaMesa = functions.firestore.document('clientes/{clienteID}').onUpdate((change, context) => {
    //Cuando se actualiza un documento en la coleccion 'clientes' se ejecuta la funcion
    const after = change.after.data(); //Obtengo los datos que se modificaron
    const promises: any = [];

    if (after.reservaEstado == 'pendiente') { //Si la reserva esta pendiente se manda la push

        let query = admin.firestore().collection('supervisores') // Obtengo los supervisores/dueños 

        query.get().then(snapshot => { // Array de documentos de los supervisores
            if (!snapshot.empty) // Si hay supervisores
            {
                snapshot.forEach(doc => { //Cada doc es un documento de un supervisor
                    let supervisor = doc.data(); //Los datos del documento del supervisor
                    const payload = {
                        token: supervisor.pushToken, //El token al que se le envia la push
                        notification: {
                            title: 'Nueva reserva de mesa',
                            body: 'Nueva reserva de mesa esperando ser aceptada'
                        },
                        data: {
                            ruta: '/gestion-reservas' //Ruta a la que se envia cuando toca la notificacion
                        }
                    };

                    const p = admin.messaging().send(payload); //Se manda la push
                    promises.push(p);
                });
                return Promise.all(promises);
            }
            return null;
        });
    }
    return null;
});


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

exports.nuevaTareaNotification = functions.firestore.document('pedidos/{pedidoID}').onUpdate((change, context) =>{
    const after = change.after.data();
    const promises: any = [];

    if(after.estado == 'aceptado'){

        let query = admin.firestore().collection('empleados');

        query.get().then(snapshot => {
            if(!snapshot.empty)
            {   
                snapshot.forEach(doc =>{
                    let empleado = doc.data();
                    let payload : any = '';


                        if(empleado.tipo == 'bartender' || empleado.tipo == 'cocinero'){

                            if(empleado.tipo == 'bartender' && (after.tipo == 'cocteleria' || after.tipo == 'mixto') ){

                                payload = {
                                    token: empleado.pushToken,
                                    notification: {
                                        title: 'Nuevo cóctel',
                                        body: 'Tenés un nuevo cóctel para hacer'
                                    },
                                    data:{
                                        ruta: '/lista-bartender'
                                    }
                                };
                            }else if(empleado.tipo == 'cocinero'  && (after.tipo == 'cocina' || after.tipo == 'mixto')){
                                
                                payload = {
                                    token: empleado.pushToken,
                                    notification: {
                                        title: 'Nuevo plato',
                                        body: 'Tenés un nuevo plato para hacer'
                                    },
                                    data:{
                                        ruta: '/lista-cocinero'
                                    }
                                };

                            }

                        const p = admin.messaging().send(payload);
                        promises.push(p);
                        
                    }
                   
                });
                return Promise.all(promises);
            }
            return null;
        });

    }

    return null;
});


exports.nuevoPlatoParaEntregarNotification = functions.firestore.document('pedidos/{pedidoID}').onUpdate((change, context) =>{
    const after = change.after.data();
    const promises: any = [];

    if(after.estado == 'listo'){

        let query = admin.firestore().collection('empleados').where('tipo', '==', 'mozo');
        
        query.get().then(snapshot => {
            if(!snapshot.empty)
            {
                snapshot.forEach(doc =>{
                    let mozo = doc.data();
                    const payload = {
                        token: mozo.pushToken,
                        notification: {
                            title: 'Actualización en lista de pedidos',
                            body: 'Nuevo pedido para entregar'
                        },
                        data:{
                            ruta: '/listado-pedidos-mozo'
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


   