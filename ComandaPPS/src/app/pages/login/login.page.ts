import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
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
    .then( res =>{
      this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});
      setTimeout(()=>{
        this.logo = "../../../assets/restaurant.png";
      },1500);
    })
    .catch( err =>{
      setTimeout(()=>{
        this.logo = "../../../assets/restaurant.png";
      },1500);
    });
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }

}
