import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaBartenderPage } from './lista-bartender.page';

const routes: Routes = [
  {
    path: '',
    component: ListaBartenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaBartenderPageRoutingModule {}
