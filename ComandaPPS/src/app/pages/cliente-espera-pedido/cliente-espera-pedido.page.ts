import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { QRService } from 'src/app/services/qr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-espera-pedido',
  templateUrl: './cliente-espera-pedido.page.html',
  styleUrls: ['./cliente-espera-pedido.page.scss'],
})
export class ClienteEsperaPedidoPage implements OnInit {

  pedidoDelCliente : any;

  constructor(public userService : AuthService, private qrS : QRService, private router : Router, private vibration: Vibration) { 
    console.log('pedido dentro del clinte ', this.userService.usuarioActual.pedido);
    this.userService.TraerPedido(this.userService.usuarioActual.pedido)
    .subscribe((data)=>{
      console.log('data ', data);
      this.pedidoDelCliente = data;
    });
  }

  ngOnInit() {
  }

  Scan(){
    
    Swal.fire({
      title: 'Escaneo',
      backdrop: false,
      text: 'Escanee el código QR para ingresar a las opciones de su mesa',
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
            this.router.navigateByUrl('/mesa-asignada-cliente');
          }
          else
          {
            this.vibration.vibrate(2000);
            Swal.fire({
              title: 'Error',
              text:'Esa no es su mesa!',
              icon: 'error',
              toast: true,
              timer: 2000,
              timerProgressBar: true,
              position: 'bottom'
            });
          }
        }
          
      }
      
    });

     
  }

  Recibir(){
    
    this.userService.UpdatearEstadoPedido(this.pedidoDelCliente.id, 'recibido')
    .then(()=>{
      	Swal.fire({
          title: 'Recibido',
          text:'¡Recibió el pedido, que lo disfrute!',
          icon: 'success',
          toast: true,
          timer: 2000,
          timerProgressBar: true,
          position: 'bottom'
        });
    });
  }

}
