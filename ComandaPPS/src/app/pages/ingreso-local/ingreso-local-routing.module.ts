import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoLocalPage } from './ingreso-local.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoLocalPageRoutingModule {}
