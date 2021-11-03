import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteEsperaPedidoPage } from './cliente-espera-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteEsperaPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteEsperaPedidoPageRoutingModule {}
