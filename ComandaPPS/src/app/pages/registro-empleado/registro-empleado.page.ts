import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Empleado } from 'src/app/models/empleado';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.page.html',
  styleUrls: ['./registro-empleado.page.scss'],
})
export class RegistroEmpleadoPage implements OnInit {
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
      tipo: ['', [Validators.required]],
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
  getTipo(){
    return this.controles.get('tipo')?.value;
  }


  mostrarToast(options: any){
    Swal.fire(options);
  }

  RegistrarEmpleado(){
    this.loading = true;
    let empleado : Empleado = {
      nombre: this.getNombre(),
      apellido: this.getApellido(),
      dni: this.getDni(),
      cuil : this.getCuil(),
      tipo : this.getTipo(),
      // foto: this.getFoto(),
      email : this.getEmail(),
      password: this.getPassword()
    }

    this.authService.registro(empleado)
    .then(async res =>{
      this.fotoS.loading = true;
      empleado.uid = res.user.uid;
      this.authService.usuarioActual = empleado;
      //this.mostrarToast({text: 'Sáquese una foto para completar el registro (opcional, puede hacerlo después)',toast: true,position: 'bottom',timer: 2000,timerProgressBar: true,icon: 'info'});
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Foto opcional',
        text: "¿Quiere sacarse una foto ahora? Puede hacerlo después.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, sacarmela ahora.',
        cancelButtonText: 'No, prefiero hacerlo despues',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.fotoS.TakePhoto();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Foto cancelada.',
            'Podes subir tu foto después. Registro completado',
            'success'
          )
        }
      });
      this.authService.AltaEmpleado(empleado);
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
