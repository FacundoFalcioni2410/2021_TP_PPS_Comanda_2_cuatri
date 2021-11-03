import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteEsperaPedidoPageRoutingModule } from './cliente-espera-pedido-routing.module';

import { ClienteEsperaPedidoPage } from './cliente-espera-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteEsperaPedidoPageRoutingModule
  ],
  declarations: [ClienteEsperaPedidoPage]
})
export class ClienteEsperaPedidoPageModule {}
