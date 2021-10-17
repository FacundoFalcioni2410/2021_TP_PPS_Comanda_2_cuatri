import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loading = false;

  constructor(private form : FormBuilder, private authService : AuthService, public fotoS: FotosService, private firestore: FirestoreService) { 
    this.controles = this.form.group({
      'nombre':['', [Validators.required]],
      'apellido':['', [Validators.required]],
      'dni':['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(8)]],
      'email': ['', [Validators.required, Validators.email]],
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

  RegistrarCliente(){

    let cliente : Cliente = {
      nombre: this.getNombre(),
      apellido: this.getApellido(),
      dni: this.getDni(),
      // foto: this.getFoto(),
      email : this.getEmail(),
      password: this.getPassword()
    }

    this.authService.registro(cliente)
    .then(async res =>{
      this.mostrarToast({text: 'Debe sacarse una foto para completar el registro',toast: true,position: 'bottom',timer: 3000,timerProgressBar: true,icon: 'info'});
      setTimeout(()=>{
        this.fotoS.TakePhoto();
      },3000);
      cliente.uid = res.user.uid;
      this.authService.AltaCliente(cliente);

      this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});
      this.authService.usuarioActual = cliente;
      setTimeout(()=>{
        this.loading = false;
      },1000);
    })
    .catch( err =>{
      this.mostrarToast({text: 'Datos incorrectos',toast: true, position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
      setTimeout(()=>{
        this.loading = false;
      },1000);
    });;

  }

}
