import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Cliente } from 'src/app/models/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {

  controles !: FormGroup;
  tipoCliente: any;
  loading = false;
  @Input() set tipo(value: any)
  {
    this.tipoCliente = value;
    if(value === 'anonimo')
    {
      this.controles = this.form.group({
        'nombre':['', [Validators.required]],
        'password': ['', [Validators.required, Validators.minLength(8)]],
        'email': ['', [Validators.required, Validators.email]],
      });
    }
    else
    {
      this.controles = this.form.group({
        'nombre':['', [Validators.required]],
        'apellido':['', [Validators.required]],
        'dni':['', [Validators.required]],
        'password': ['', [Validators.required, Validators.minLength(8)]],
        'email': ['', [Validators.required, Validators.email]],
      });
    }
  }

  constructor(private form : FormBuilder, private authService : AuthService, public fotoS: FotosService, private firestore: FirestoreService, private vibration: Vibration) { 
    this.controles = this.form.group({});
  }

  ngOnInit() {
   
  }

  getNombre(){
    return this.controles.get('nombre')?.value;
  }
  
  getApellido(){
    return this.controles.get('apellido')?.value;
  }
  
  getDni(){
    return this.controles.get('dni')?.value;
  }
  getEmail(){
    return this.controles.get('email')?.value;
  }
  getPassword(){
    return this.controles.get('password')?.value;
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }

  RegistrarCliente(){
    this.loading = true;
    let cliente: Cliente;
    if(this.tipoCliente === "anonimo")
    {
      cliente = {
        nombre: this.getNombre(),
        email : this.getEmail(),
        password: this.getPassword()
      }
    }
    else
    {
      cliente = {
        nombre: this.getNombre(),
        apellido: this.getApellido(),
        dni: this.getDni(),
        email : this.getEmail(),
        password: this.getPassword()
      }
    }
    

    this.authService.registro(cliente)
    .then(async res =>{
      this.fotoS.loading = true;
      cliente.uid = res.user.uid;
      this.authService.usuarioActual = cliente;
      this.mostrarToast({text: 'Debe sacarse una foto para completar el registro',toast: true,position: 'bottom',timer: 2000,timerProgressBar: true,icon: 'info'});
      setTimeout(()=>{
        this.fotoS.TakePhoto();
      },2000);

      this.authService.AltaCliente(cliente);
    })
    .catch( err =>{
      setTimeout(()=>{
        this.loading = false;
      },1000);
      this.vibration.vibrate(2000);
      if(err.code === "auth/email-already-in-use")
      {
        this.mostrarToast({text: 'La cuenta ya existe',toast: true, position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
      }
      // this.mostrarToast({text: 'Datos incorrectos',toast: true, position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
    });

    this.controles.reset();
  }

}
