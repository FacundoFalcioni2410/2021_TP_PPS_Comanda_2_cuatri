import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarPedidoPageRoutingModule } from './realizar-pedido-routing.module';

import { RealizarPedidoPage } from './realizar-pedido.page';
import { ListaProductosComponent } from 'src/app/components/lista-productos/lista-productos.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { SharedModule } from 'src/app/sharedComponents/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarPedidoPageRoutingModule,
    LazyLoadImageModule,
    SharedModule
  ],
  declarations: [RealizarPedidoPage,ListaProductosComponent],
  // providers: [
  //   {
  //     provide: LAZYLOAD_IMAGE_HOOKS,
  //     useClass: ScrollHooks
  //   }
  // ]
})
export class RealizarPedidoPageModule {}
