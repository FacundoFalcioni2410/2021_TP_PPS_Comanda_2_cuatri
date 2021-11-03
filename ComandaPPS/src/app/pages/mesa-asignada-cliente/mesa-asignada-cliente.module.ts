import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaAsignadaClientePageRoutingModule } from './mesa-asignada-cliente-routing.module';

import { MesaAsignadaClientePage } from './mesa-asignada-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaAsignadaClientePageRoutingModule
  ],
  declarations: [MesaAsignadaClientePage]
})
export class MesaAsignadaClientePageModule {}
