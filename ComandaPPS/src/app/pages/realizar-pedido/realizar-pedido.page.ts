import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { ModalController } from '@ionic/angular';
import { CarritoPage } from '../carrito/carrito.page';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.page.html',
  styleUrls: ['./realizar-pedido.page.scss'],
})
export class RealizarPedidoPage implements OnInit {

  component = SpinnerComponent;
  productos: any = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  recibirProducto(producto: any){
    this.productos.push(producto);
  }

  async verPedido(){
      const modal = await this.modalController.create({
        component: CarritoPage,
        cssClass: 'my-custom-class',
        componentProps: {
          'productos': this.productos,
        }
      });
      return await modal.present();
    }  
}
