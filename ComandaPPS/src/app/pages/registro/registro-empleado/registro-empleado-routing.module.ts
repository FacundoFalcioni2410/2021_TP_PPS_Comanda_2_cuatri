import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroEmpleadoPage } from './registro-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroEmpleadoPageRoutingModule {}
