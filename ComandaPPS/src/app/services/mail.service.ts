import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { init } from "emailjs-com";
init("user_8zr4jAdzYg1UjcQN1kt1m");



@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() {}

  enviarAviso(usuario: any){
    let templateParams = {
      to_name: usuario.nombre,
      message: "Para acceder a la aplicacion debe aguardar a que su cuenta sea activada",
      email_cliente: usuario.email,
      from_name: "Churrasic Park"
    };

    emailjs.send("service_dqw1u4q", "template_5c1hipl", templateParams)
      .then(res =>{
        console.log("Email enviado.", res.status, res.text);
      })
      .catch(error =>{
        console.log("Error al enviar el email.", error);
      });
  }

  enviarConfirmacionHabilitado(usuario: any){
    let templateParams = {
      to_name: usuario.nombre,
      message: "Usted ha sido habilitado para ingresar al local Churrasic Park",
      email_cliente: usuario.email,
      from_name: "Churrasic Park"
    };

    emailjs.send("service_dqw1u4q", "template_5c1hipl", templateParams)
      .then(res =>{
        console.log("Email enviado.", res.status, res.text);
      })
      .catch(error =>{
        console.log("Error al enviar el email.", error);
      });
  }
}
