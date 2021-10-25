import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaClienteDeshabilitadosPageRoutingModule } from './lista-cliente-deshabilitados-routing.module';

import { ListaClienteDeshabilitadosPage } from './lista-cliente-deshabilitados.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaClienteDeshabilitadosPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaClienteDeshabilitadosPage]
})
export class ListaClienteDeshabilitadosPageModule {}
