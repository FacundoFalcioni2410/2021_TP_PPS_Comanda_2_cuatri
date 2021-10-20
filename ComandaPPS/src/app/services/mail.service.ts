import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { init } from "emailjs-com";
init("user_8zr4jAdzYg1UjcQN1kt1m");



@Injectable({
  providedIn: 'root'
})
export class MailService {

  private API_TOKEN = "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";

  constructor() {}

  enviarAviso(){
    let templateParams = {
      to_name: "Facundo",
      message: "test",
      email_cliente: "facundofalcioni2410@gmail.com",
      from_name: "ComandaPPS"
    };

    emailjs.send("service_dqw1u4q", "template_5c1hipl", templateParams)
      .then(res =>{
        console.log("Correo enviado.", res.status, res.text);
      })
      .catch(error =>{
        console.log("Error al enviar.", error);
      });
  }
}
