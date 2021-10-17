import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSupervisorPageRoutingModule } from './registro-supervisor-routing.module';

import { RegistroSupervisorPage } from './registro-supervisor.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSupervisorPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroSupervisorPage]
})
export class RegistroSupervisorPageModule {}
