import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEsperaPageRoutingModule } from './lista-espera-routing.module';

import { ListaEsperaPage } from './lista-espera.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEsperaPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ListaEsperaPage]
})
export class ListaEsperaPageModule {}
