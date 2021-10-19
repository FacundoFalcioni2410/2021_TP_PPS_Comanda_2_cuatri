import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroSupervisorPage } from './registro-supervisor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroSupervisorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroSupervisorPageRoutingModule {}
