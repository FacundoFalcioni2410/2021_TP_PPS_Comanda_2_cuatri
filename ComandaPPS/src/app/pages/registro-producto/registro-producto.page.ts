import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { AuthService } from 'src/app/services/auth.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.page.html',
  styleUrls: ['./registro-producto.page.scss'],
})
export class RegistroProductoPage implements OnInit {

  controles !: FormGroup;
  formDataFotos: FormData;
  nombresFotos: any = [];

  constructor(private form : FormBuilder, private auth : AuthService, private fotoS: FotosService) {

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
  
  archivoSeleccionado(event: any)
  {
    if (event.target.files.length === 3)
    {
      this.formDataFotos = new FormData();
      for (let i = 0; i < 3; i++)
      {
        this.nombresFotos.push(event.target.files[i].name);
        this.formDataFotos.delete(`archivo${i}`);
        this.formDataFotos.append(`archivo${i}`, event.target.files[i], event.target.files[i].name);
      }
    }
    else
    {
      this.formDataFotos = null;
      this.mostrarToast({text: "Debe seleccionar 3 fotos", toast: true, position: 'bottom',timer: 2000,timerProgressBar: true, icon: 'error'});
    }
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }

  RegistrarProducto(){

    let producto : Producto = {
      nombre: this.getNombre(),
      descripcion: this.getDescripcion(),
      tiempo: this.getTiempoElaboracion(),
      precio: this.getPrecio(),
      //fotos: aca va las fotos
    };

    this.fotoS.subirArchivos(this.formDataFotos, this.nombresFotos, producto);
  }
}
