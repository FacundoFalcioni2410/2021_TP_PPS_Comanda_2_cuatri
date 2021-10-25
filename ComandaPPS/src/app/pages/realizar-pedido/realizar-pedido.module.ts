import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarPedidoPageRoutingModule } from './realizar-pedido-routing.module';

import { RealizarPedidoPage } from './realizar-pedido.page';
import { ListaProductosComponent } from 'src/app/components/lista-productos/lista-productos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarPedidoPageRoutingModule
  ],
  declarations: [RealizarPedidoPage,ListaProductosComponent]
})
export class RealizarPedidoPageModule {}
