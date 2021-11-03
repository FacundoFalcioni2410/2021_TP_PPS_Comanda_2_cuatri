import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesaAsignadaClientePage } from './mesa-asignada-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: MesaAsignadaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesaAsignadaClientePageRoutingModule {}
