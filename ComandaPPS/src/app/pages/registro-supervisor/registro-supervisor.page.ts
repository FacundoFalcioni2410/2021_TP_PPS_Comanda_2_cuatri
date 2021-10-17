import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Supervisor } from 'src/app/models/supervisor';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-supervisor',
  templateUrl: './registro-supervisor.page.html',
  styleUrls: ['./registro-supervisor.page.scss'],
})
export class RegistroSupervisorPage implements OnInit {

  controles !: FormGroup;
  loading = false;

  constructor(private form : FormBuilder, private authService : AuthService, public fotoS: FotosService, private firestore: FirestoreService, private vibration: Vibration) { 
    this.controles = this.form.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      dni:['', [Validators.required]],
      cuil:['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      perfil: ['', [Validators.required]],
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

  getCuil(){
    return this.controles.get('cuil')?.value;
  }
  getEmail(){
    return this.controles.get('email')?.value;
  }
  getPassword(){
    return this.controles.get('password')?.value;
  }
  getPerfil(){
    return this.controles.get('perfil')?.value;
  }


  mostrarToast(options: any){
    Swal.fire(options);
  }

  RegistrarEmpleado(){
    this.loading = true;
    let supervisor : Supervisor = {
      nombre: this.getNombre(),
      apellido: this.getApellido(),
      dni: this.getDni(),
      cuil : this.getCuil(),
      perfil: this.getPerfil(),
      email : this.getEmail(),
      password: this.getPassword()
    }

    this.authService.registro(supervisor)
    .then(async res =>{
      this.fotoS.loading = true;
      supervisor.uid = res.user.uid;
      this.authService.usuarioActual = supervisor;
      this.mostrarToast({text: 'Sáquese una foto para completar el registro (opcional, puede hacerlo después)',toast: true,position: 'bottom',timer: 2000,timerProgressBar: true,icon: 'info'});

      setTimeout(()=>{
        this.fotoS.TakePhoto();
      },1500)
      this.authService.AltaSupervisor(supervisor);
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
      }
      this.controles.reset();
    });
  }
}
