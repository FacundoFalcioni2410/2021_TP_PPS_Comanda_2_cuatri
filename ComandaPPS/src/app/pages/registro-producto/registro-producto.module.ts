import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroProductoPageRoutingModule } from './registro-producto-routing.module';

import { RegistroProductoPage } from './registro-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroProductoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroProductoPage]
})
export class RegistroProductoPageModule {}
