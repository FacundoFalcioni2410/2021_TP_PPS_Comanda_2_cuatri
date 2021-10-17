import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.page.html',
  styleUrls: ['./registro-producto.page.scss'],
})
export class RegistroProductoPage implements OnInit {

  controles !: FormGroup;

  constructor(private form : FormBuilder) {

    this.controles = this.form.group({
      'nombre':['', [Validators.required]],
      'descripcion':['', [Validators.required]],
      'TElaboracion':['', [Validators.required, Validators.maxLength(3)]],
      'precio': ['', [Validators.required, Validators.maxLength(8)]],
    });

  }

  ngOnInit() {
  }

  getNombre(){
    return this.controles.get('nombre')?.value;
  }
  
  getDescripcion(){
    return this.controles.get('descripcion')?.value;
  }
  getTiempoElaboracion(){
    return this.controles.get('TElaboracion')?.value;
  }
  getPrecio(){
    return this.controles.get('precio')?.value;
  }


  RegistrarProducto(){

  }
}
