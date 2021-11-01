import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  @Input() productos: any;
  precio: number = 0;
  maxTiempo: number;

  constructor(private modalController: ModalController, private userService: AuthService) {
    
  }

  ngOnInit() {
    console.log(this.productos);
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

    //cocteleria, cocina, 

    let pedido = {
      estado: 'pedido',
      productos: this.productos,
      tiempo: this.maxTiempo,
      etapasRealizadas: 0,
      etapasTotales: cantidadCocina + cantidadCocteleria,
      precioTotal: this.precio
    }

    this.userService.SubirPedido(pedido);
  }

}
