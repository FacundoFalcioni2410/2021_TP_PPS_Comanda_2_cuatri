import { Component } from '@angular/core';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { FotosService } from '../services/fotos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotoS: FotosService) {}

  // ionViewDidEnter(){
  //   Swal.fire({
  //     text: 'hola',
  //     toast: true,
  //     position: 'bottom',
  //     timer: 1500,
  //     timerProgressBar: true,
  //     icon: 'error',
  //   })
  // }
}
