import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCocineroPageRoutingModule } from './lista-cocinero-routing.module';

import { ListaCocineroPage } from './lista-cocinero.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCocineroPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaCocineroPage]
})
export class ListaCocineroPageModule {}
