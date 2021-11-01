import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCocineroPage } from './lista-cocinero.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCocineroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCocineroPageRoutingModule {}
