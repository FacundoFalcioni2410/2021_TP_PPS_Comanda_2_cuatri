import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { QRService } from 'src/app/services/qr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-local',
  templateUrl: './ingreso-local.page.html',
  styleUrls: ['./ingreso-local.page.scss'],
})
export class IngresoLocalPage implements OnInit {

  listaEspera : boolean = false;

  constructor(private qrS: QRService, public userService : AuthService, private route : Router) { }

  ngOnInit() {
  }


  EntrarEnListaEspera(){
    this.listaEspera = true;
    this.userService.usuarioActual.listaEspera = true;
    this.userService.updateListaEsperaCliente(this.userService.usuarioActual?.id,true);
  }

  

  Scan(){
    
    if(!this.userService.usuarioActual.listaEspera && !this.userService.usuarioActual.mesaAsignada){
          Swal.fire({
            title: 'Escaneo',
            backdrop: false,
            text: 'Escanee el código QR para ingresar a la lista',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            confirmButtonText: 'Escanear',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
          }).then(async (result) => {
            
            if (result.isConfirmed) {
              let datos = await this.qrS.scan();

              if(datos.text){
                if(datos.text =="ingresoListaDeEspera"){
                  this.EntrarEnListaEspera();
                }
              }
                
              }
            
          });

    }else{//CASO EN EL QUE EL CLIENTE YA HAYA SIDO ACEPTADO EN LA LISTA Y TIENE MESA ASIGNADA

        Swal.fire({
          title: 'Escaneo',
          backdrop: false,
          text: `Escanee el código QR de la mesa que se le asignó ${this.userService.usuarioActual.mesaAsignada}.`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          showCancelButton: true,
          confirmButtonText: 'Escanear',
          cancelButtonText: 'Cancelar',
          reverseButtons: true,
        }).then(async (result) => {
          
          if (result.isConfirmed) {
            let datos = await this.qrS.scan();

            if(datos.text){
              if(datos.text == this.userService.usuarioActual.mesaAsignada){
                this.route.navigateByUrl('/realizar-pedido');
              }
            }
              
            }
          
        });

    }
  }
}
