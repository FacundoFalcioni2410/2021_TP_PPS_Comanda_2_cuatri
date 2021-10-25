import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaClienteDeshabilitadosPageRoutingModule } from './lista-cliente-deshabilitados-routing.module';

import { ListaClienteDeshabilitadosPage } from './lista-cliente-deshabilitados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaClienteDeshabilitadosPageRoutingModule
  ],
  declarations: [ListaClienteDeshabilitadosPage]
})
export class ListaClienteDeshabilitadosPageModule {}
