import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.page.html',
  styleUrls: ['./realizar-pedido.page.scss'],
})
export class RealizarPedidoPage implements OnInit {

  component = SpinnerComponent;
  productos: any = [];

  constructor() { }

  ngOnInit() {
  }

  recibirProducto(producto: any){
    this.productos.push(producto);
  }

  verPedido(){
    
  }

}
