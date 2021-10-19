import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroClientePageRoutingModule } from './registro-cliente-routing.module';

import { RegistroClientePage } from './registro-cliente.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroClientePageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [RegistroClientePage, RegistroComponent]
})
export class RegistroClientePageModule {}
