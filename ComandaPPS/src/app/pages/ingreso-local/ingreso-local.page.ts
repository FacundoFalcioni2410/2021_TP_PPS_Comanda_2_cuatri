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
  usuario: any
  constructor(private qrS: QRService, public userService : AuthService, private route : Router) {
    this.userService.TraerGenerico('clientes','uid', this.userService.usuarioActual.uid).subscribe(res =>{
      this.usuario = res[0];
      this.userService.usuarioActual = res[0];
    });
  }

  ngOnInit() {
  }


  EntrarEnListaEspera(){
    this.listaEspera = true;
    this.usuario.listaEspera = true;
    this.userService.updateListaEsperaCliente(this.usuario?.id,true);
  }

  

  Scan(){
    
    if(!this.usuario.listaEspera && this.usuario.mesaAsignada !== 0){

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
                if(datos.text == "ingresoListaDeEspera"){
                  this.EntrarEnListaEspera();
                }
              }
                
              }
            
          });

    }else if(this.usuario.listaEspera && this.usuario.mesaAsignada != 0){//CASO EN EL QUE EL CLIENTE YA HAYA SIDO ACEPTADO EN LA LISTA Y TIENE MESA ASIGNADA

        Swal.fire({
          title: 'Escaneo',
          backdrop: false,
          text: `Escanee el código QR de la mesa que se le asignó ${this.usuario.mesaAsignada}.`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          showCancelButton: true,
          confirmButtonText: 'Escanear',
          cancelButtonText: 'Cancelar',
          reverseButtons: true,
        }).then(async (result) => {
          console.log('then');
          if (result.isConfirmed) {
            let datos = await this.qrS.scan();
            console.log(datos);
            if(datos.text){
              console.log(datos.text);
              if(datos.text == this.usuario.mesaAsignada){
                this.route.navigateByUrl('/realizar-pedido');
              }else{
                Swal.fire({
                  title:"Error",
                  icon: 'error',
                  text:'No se le asignó esa mesa.',
                  timer: 4000,
                  timerProgressBar: true,
                  backdrop: false,
                });
              }
            }
              
            }
          
        });

    }else if(!this.usuario.listaEspera && this.usuario.mesaAsignada == 0){
      
      Swal.fire({
        title: 'Escaneo',
        backdrop: false,
        text: `Escanee el código QR de ingreso a la lista de espera para ver los gráficos.`,
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
          console.log(datos);

          if(datos.text){
            if(datos.text == "ingresoListaDeEspera"){
              this.route.navigateByUrl('/grafico-cliente');
            }else{
              Swal.fire({
                title:"Error",
                icon: 'error',
                text:'No se le asignó esa mesa.',
                timer: 4000,
                timerProgressBar: true,
                backdrop: false,
              })
            }
          }
            
          }
        
      });
    }
  }
}
