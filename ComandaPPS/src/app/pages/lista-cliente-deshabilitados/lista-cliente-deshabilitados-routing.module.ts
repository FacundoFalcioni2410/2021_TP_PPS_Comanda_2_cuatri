import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaClienteDeshabilitadosPage } from './lista-cliente-deshabilitados.page';

const routes: Routes = [
  {
    path: '',
    component: ListaClienteDeshabilitadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaClienteDeshabilitadosPageRoutingModule {}
