import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mesa } from 'src/app/models/mesa';
import { AuthService } from 'src/app/services/auth.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-mesa',
  templateUrl: './registro-mesa.page.html',
  styleUrls: ['./registro-mesa.page.scss'],
})
export class RegistroMesaPage implements OnInit {

  controles !: FormGroup;

  constructor(private form : FormBuilder, private auth : AuthService, private fotoS : FotosService) {

    this.controles = this.form.group({
      'numero':['', [Validators.required]],
      'cantidadComensales':['', [Validators.required]],
      'tipo':['', [Validators.required, Validators.minLength(3)]],
    });

  }

  ngOnInit() {
  }

  getNumero(){
    return this.controles.get('numero')?.value;
  }
  
  getCantidadComensales(){
    return this.controles.get('cantidadComensales')?.value;
  }
  getTipo(){
    return this.controles.get('tipo')?.value;
  }

  RegistrarMesa(){
    let mesa : any = {
      numero : this.getNumero(),
      cantidadComensales : this.getCantidadComensales(),
      mesaTipo : this.getTipo(),
      cliente : false
     };
     
     Swal.fire({text: 'Debe sacarse una foto para completar el registro',toast: true,position: 'bottom',timer: 2000,timerProgressBar: true,icon: 'info'});
     setTimeout(()=>{
       this.fotoS.TakePhoto(mesa);
     },2000);

    this.controles.reset();
  }
}
