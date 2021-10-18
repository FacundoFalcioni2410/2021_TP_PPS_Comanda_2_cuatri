import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMesaPageRoutingModule } from './registro-mesa-routing.module';

import { RegistroMesaPage } from './registro-mesa.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMesaPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [RegistroMesaPage]
})
export class RegistroMesaPageModule {}
