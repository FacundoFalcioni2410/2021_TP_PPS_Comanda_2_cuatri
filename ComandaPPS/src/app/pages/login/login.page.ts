import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MailService } from 'src/app/services/mail.service';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  logo = "../../../assets/restaurant.png";

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router, private mailS: MailService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  accesoRapidoCliente(){
    this.form.controls.email.setValue('cliente@cliente.com');
    this.form.controls.password.setValue('clientecliente');
    this.login();
  }

  accesoRapidoMetre(){
    this.form.controls.email.setValue('empleado2@empleado.com');
    this.form.controls.password.setValue('empleado');
    this.login();
  }

  accesoRapidoCocinero(){
    this.form.controls.email.setValue('cocinero@cocinero.com');
    this.form.controls.password.setValue('cocinero');
    this.login();
  }

  accesoRapidoMozo(){
    this.form.controls.email.setValue('mozo@mozo.com');
    this.form.controls.password.setValue('mozomozo');
    this.login();
  }

  accesoRapidoBartender(){
    this.form.controls.email.setValue('bartender@bartender.com');
    this.form.controls.password.setValue('bartender');
    this.login();
  }

  accesoRapidoSupervisor(){
    this.form.controls.email.setValue('supervisor@supervisor.com');
    this.form.controls.password.setValue('12345678');
    this.login();
  }

  login(){
    this.logo = "../../../assets/spinner.gif";
    this.auth.login(this.form.value)
    .then( async res =>{
      let user = await this.auth.getUsers(res.user.email);
      if(user)
      {
        if(!user?.cuil && !user?.habilitado)
        {
          this.mostrarToast({text: 'Su cuenta todavia no fue habilitada, revise su correo electronico',toast: true,position: 'bottom',timer: 2500,timerProgressBar: true,icon: 'error'});
        }
        else if(!user?.cuil && user?.habilitado)
        {
          this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});
          setTimeout(()=>{
            this.logo = "../../../assets/restaurant.png";
            this.router.navigate(['/ingreso-local']);
          },1500);
        }
        else if(user.tipo)
        { 
          this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});
          if(user.tipo=='bartender'){
            this.router.navigate(['/lista-bartender']);
          }else if(user.tipo == 'metre'){
            this.router.navigate(['/lista-espera']);
          }else if(user.tipo =='mozo'){
            this.router.navigate(['/listado-pedidos-mozo']);
          }
          else
          {
            this.router.navigate(['/lista-cocinero']);
          }
        }
        else
        {
          this.router.navigate(['/lista-cliente-deshabilitados']);
          this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});
        }

      }
      else
      {
        this.mostrarToast({text: 'Datos incorrectos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
      }
      setTimeout(()=>{
        this.logo = "../../../assets/restaurant.png";
      },1500);
    })
    .catch( err =>{
      this.mostrarToast({text: 'Datos incorrectos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
      setTimeout(()=>{
        this.logo = "../../../assets/restaurant.png";
      },1500);
    });
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }

}