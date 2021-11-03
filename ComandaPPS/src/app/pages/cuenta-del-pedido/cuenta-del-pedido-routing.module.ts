import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaDelPedidoPage } from './cuenta-del-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaDelPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaDelPedidoPageRoutingModule {}
