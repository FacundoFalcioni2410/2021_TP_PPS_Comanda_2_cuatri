import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoClientePageRoutingModule } from './grafico-cliente-routing.module';

import { GraficoClientePage } from './grafico-cliente.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoClientePageRoutingModule,
    ChartsModule
  ],
  declarations: [GraficoClientePage]
})
export class GraficoClientePageModule {}
