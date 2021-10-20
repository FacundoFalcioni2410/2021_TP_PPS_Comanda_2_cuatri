import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoLocalPageRoutingModule } from './ingreso-local-routing.module';

import { IngresoLocalPage } from './ingreso-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoLocalPageRoutingModule
  ],
  declarations: [IngresoLocalPage]
})
export class IngresoLocalPageModule {}
