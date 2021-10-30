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
  constructor(private modalController: ModalController, private userService: AuthService) { }

  ngOnInit() {
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
    let precio = 0;
    let flag = false;
    let max = 0;
    for(let producto of this.productos)
    {
      if(!flag || producto.tiempo > max)
      {
        flag = true;
        max = producto.tiempo;
      }
      if(producto.descripcion === 'cocteleria')
      {
        cantidadCocteleria = 1;
      }
      else
      {
        cantidadCocina = 1;
      }
      precio += producto.precio * producto.cantidad;
    }

    //cocteleria, cocina, 

    let pedido = {
      estado: 'pedido',
      productos: this.productos,
      tiempo: max,
      etapasRealizadas: 0,
      etapasTotales: cantidadCocina + cantidadCocteleria,
      precioTotal: precio
    }

    this.userService.SubirPedido(pedido);
  }

}
