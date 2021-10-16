import { Component } from '@angular/core';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

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
