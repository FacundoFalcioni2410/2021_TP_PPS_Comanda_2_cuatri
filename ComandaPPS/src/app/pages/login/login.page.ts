import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  logo = "../../../assets/restaurant.png";

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  login(){
    this.logo = "../../../assets/spinner.gif";
    this.auth.login(this.form.value)
    .then( async res =>{
      console.log(res);
      let user = await this.auth.getUsers(res.user.email);
      console.log(user);
      if(user)
      {
        if(!user?.cuil && !user?.habilitado)
        {
          this.mostrarToast({text: 'Debe aguardar a que su cuenta sea aceptada para ingresar',toast: true,position: 'bottom',timer: 2500,timerProgressBar: true,icon: 'error'});
        }
        else if(!user?.cuil && user?.habilitado)
        {
          this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});
          setTimeout(()=>{
            this.logo = "../../../assets/restaurant.png";
            this.router.navigate(['/ingreso-local']);
          },1500);
        }
        else
        {
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