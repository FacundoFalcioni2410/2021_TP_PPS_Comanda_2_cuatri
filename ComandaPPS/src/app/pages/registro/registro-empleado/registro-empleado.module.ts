import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEmpleadoPageRoutingModule } from './registro-empleado-routing.module';

import { RegistroEmpleadoPage } from './registro-empleado.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';

@NgModule({
  declarations: [
    RegistroEmpleadoPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEmpleadoPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class RegistroEmpleadoPageModule {}
