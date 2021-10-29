import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaBartenderPageRoutingModule } from './lista-bartender-routing.module';

import { ListaBartenderPage } from './lista-bartender.page';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaBartenderPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaBartenderPage]
})
export class ListaBartenderPageModule {}
