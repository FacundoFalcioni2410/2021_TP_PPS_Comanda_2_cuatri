import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  form: FormGroup
  nombresFotos = []
  formDataFotos: FormData = null;
  productos: any;


  constructor(private formBuilder: FormBuilder, private fotoS: FotosService, private vibration: Vibration, private firestore: AuthService, private userService: AuthService, private router: Router, private audioS: AudioService) {
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      satisfaccion: ['5',[Validators.required]],
      productoConsumido: ['',[Validators.required]],
      trato: ['bien',[Validators.required]],
      visitar: ['false',[Validators.required]],
    });
    this.firestore.getProductos().subscribe(value =>{
      this.productos = value;
    });
  }

  ngOnInit() {
    
  }

  obtenerCantidad(encuesta, valor, clave){
    let filtrado = encuesta.filter((item: any)=>{
      return item[clave] == valor;
    });
    return filtrado.length;
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }

  archivoSeleccionado(event: any)
  {
    if (event.target.files.length > 0)
    {
      this.formDataFotos = new FormData();
      for (let i = 0; i < event.target.files.length; i++)
      {
        this.nombresFotos.push(event.target.files[i].name);
        this.formDataFotos.delete(`archivo${i}`);
        this.formDataFotos.append(`archivo${i}`, event.target.files[i], event.target.files[i].name);
      }
    }
    else
    {
      this.formDataFotos = null;
      Haptics.vibrate({duration: 2000});
      this.mostrarToast({text: "Debe seleccionar 3 fotos", toast: true, position: 'bottom',timer: 2000,timerProgressBar: true, icon: 'error'});
    }
  }

  subirEncuesta(){
    if(this.nombresFotos.length)
    {
      this.fotoS.subirArchivos(this.formDataFotos, this.nombresFotos, this.form.value);
    }
    else
    {
      this.audioS.PlayAudio();
      this.router.navigate(['/grafico-cliente']);
    }
  }
}
