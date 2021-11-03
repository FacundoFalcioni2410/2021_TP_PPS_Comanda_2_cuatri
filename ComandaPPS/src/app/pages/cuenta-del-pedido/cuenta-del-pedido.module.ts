import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaDelPedidoPageRoutingModule } from './cuenta-del-pedido-routing.module';

import { CuentaDelPedidoPage } from './cuenta-del-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaDelPedidoPageRoutingModule
  ],
  declarations: [CuentaDelPedidoPage]
})
export class CuentaDelPedidoPageModule {}
