import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AudioService } from 'src/app/services/audio.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  @Input() productos: any;
  precio: number = 0;
  maxTiempo: number;

  constructor(private modalController: ModalController, private userService: AuthService, private router: Router, private audioS: AudioService) {
    
  }

  ngOnInit() {
    let flag = false;
    for(let producto of this.productos)
    {
      if(!flag || producto.tiempo > this.maxTiempo)
      {
        flag = true;
        this.maxTiempo = producto.tiempo;
      }
      this.precio += producto.precio * producto.cantidad;
    }
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed': true,
      'productos': this.productos
    });
  }

  realizarPedido(){

    let cantidadCocina = 0;
    let cantidadCocteleria = 0;
    for(let producto of this.productos)
    {
      if(producto.descripcion === 'cocteleria')
      {
        cantidadCocteleria = 1;
      }
      else
      {
        cantidadCocina = 1;
      }
    }

    let etapasTotales = cantidadCocina + cantidadCocteleria;
    let tipo: string = '';

    if(etapasTotales > 1)
    {
      tipo = 'mixto'
    }
    else if(cantidadCocina === 1)
    {
      tipo = 'cocina';
    }
    else
    {
      tipo = 'cocteleria'
    }


    let pedido = {
      estado: 'pedido',
      productos: this.productos,
      tiempo: this.maxTiempo,
      etapasRealizadas: 0,
      etapasTotales: etapasTotales,
      precioTotal: this.precio,
      cocteleriaEntregado: false,
      cocinaEntregado: false,
      tipo: tipo
    }

    this.userService.SubirPedido(pedido)
    .then(doc =>{
      this.userService.PedidoCliente(this.userService?.usuarioActual?.id, doc.id);
      this.userService.usuarioActual.pedido = doc.id;
      Swal.fire({text: `Pedido realizado con exito, recuerde que el tiempo estimado de su entrega es de: ${this.maxTiempo} minutos`, toast: true, timer: 3000, timerProgressBar: true, icon: 'success', position: 'bottom'});
      setTimeout(() =>{
        this.audioS.PlayAudio();
        this.dismiss();
        this.router.navigate(['/cliente-espera-pedido']);
      },3000)
    });
  }

}
