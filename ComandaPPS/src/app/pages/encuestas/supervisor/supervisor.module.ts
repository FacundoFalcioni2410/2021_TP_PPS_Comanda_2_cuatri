import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorPageRoutingModule } from './supervisor-routing.module';

import { SupervisorPage } from './supervisor.page';
import { ListadoGenericoComponent } from 'src/app/components/listado-generico/listado-generico.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupervisorPageRoutingModule
  ],
  declarations: [SupervisorPage, ListadoGenericoComponent]
})
export class SupervisorPageModule {}
