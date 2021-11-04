import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Cliente } from 'src/app/models/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FotosService } from 'src/app/services/fotos.service';
import { MailService } from 'src/app/services/mail.service';
import { QRService } from 'src/app/services/qr.service';
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
  anonimo: boolean = false;

  constructor(private formBuilder : FormBuilder, private authService : AuthService, public fotoS: FotosService, private firestore: FirestoreService, private vibration: Vibration, private qrS: QRService, private mailS: MailService, private router: Router) { 
    this.controles = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      dni: ['', [Validators.required, Validators.min(1111111), Validators.min(9999999)]],
    });
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

  registroAnonimo(){
    this.anonimo = !this.anonimo;
    if(this.anonimo){
      this.formRegistroAnonimo();
    }else{
      this.formRegistro();
    }
  }

  formRegistroAnonimo(){
    this.controles = this.formBuilder.group({
      nombre: ['',Validators.required],
    });
  }

  formRegistro(){
    this.controles = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      dni: ['', [Validators.required, Validators.min(1111111), Validators.min(9999999)]],
    });
  }

  async scanDNI(){
    Swal.fire({
      title: 'Escaneo DNI!',
      backdrop: false,
      text: 'Para escanear el DNI guiese con la foto de arriba',
      imageUrl: '../../../../assets/dni.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonText: 'Escanear',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        let datos = await this.qrS.scanDNI();
        this.controles.get('dni')?.setValue(datos?.dni);
      }
    });
  }


  RegistrarCliente(){
    this.loading = true;
    let cliente: Cliente;
    if(!this.anonimo)
    {
      cliente = {
        nombre: this.getNombre(),
        email : this.getEmail(),
        password: this.getPassword(),
        habilitado: false,
        listaEspera: false,
        tipoCliente: 'estandar'
      }
    }
    else
    {
      cliente = {
        nombre: this.getNombre(),
        habilitado: true,
        listaEspera: false,
        tipoCliente: 'anonimo'
      }
    }
    

    this.authService.registro(cliente)
    .then(async res =>{
      this.fotoS.loading = true;
      cliente.uid = res.user.uid;
      this.authService.usuarioActual = cliente;
      this.mostrarToast({text: 'Debe sacarse una foto para completar el registro',toast: true,position: 'bottom',timer: 2000,timerProgressBar: true,icon: 'info'});
      setTimeout(()=>{
        this.fotoS.TakePhoto(cliente);
      },2000);
      // if(cliente.tipoCliente === "estandar")
      // {
      //   this.mailS.enviarAviso(cliente);
      // }
      this.controles.reset();
    })
    .catch( err =>{
      setTimeout(()=>{
        this.loading = false;
      },1000);
      this.vibration.vibrate(2000);
      if(err.code === "auth/email-already-in-use")
      {
        this.mostrarToast({text: 'La cuenta ya existe',toast: true, position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
        this.vibration.vibrate(2000);
      }
      this.controles.reset();
      // this.mostrarToast({text: 'Datos incorrectos',toast: true, position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
    });

  }

}
