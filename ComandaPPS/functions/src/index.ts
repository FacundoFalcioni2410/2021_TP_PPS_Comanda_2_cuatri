import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
// import { admin } from "firebase-admin";


admin.initializeApp(functions.config().firebase);


exports.ingresoListaEspera = functions.firestore.document('clientes/{clienteID}').onUpdate((change, context) =>{
    const after = change.after.data();
    var tokens: string[] = [];
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
                if(tokens.length > 0)
                {
                    
                }
            }
        });


    }
});
    
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
