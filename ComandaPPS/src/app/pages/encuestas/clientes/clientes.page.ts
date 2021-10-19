import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  nombresFotos = []
  formDataFotos: FormData = null;

  constructor(private vibration: Vibration) { }

  ngOnInit() {
  }

  change(value){
    console.log(value.detail.value);
  }

  mostrarToast(options: any){
    Swal.fire(options);
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
      this.vibration.vibrate(2000);
      this.mostrarToast({text: "Debe seleccionar 3 fotos", toast: true, position: 'bottom',timer: 2000,timerProgressBar: true, icon: 'error'});
    }
  }


}
