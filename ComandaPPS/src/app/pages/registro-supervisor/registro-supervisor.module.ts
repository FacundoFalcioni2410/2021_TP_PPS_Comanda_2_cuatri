import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSupervisorPageRoutingModule } from './registro-supervisor-routing.module';

import { RegistroSupervisorPage } from './registro-supervisor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSupervisorPageRoutingModule
  ],
  declarations: [RegistroSupervisorPage]
})
export class RegistroSupervisorPageModule {}
