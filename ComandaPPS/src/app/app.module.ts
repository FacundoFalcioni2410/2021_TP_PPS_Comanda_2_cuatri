import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';



@NgModule({
  declarations: 
  [
    AppComponent
  ],
  entryComponents: [],
  imports: 
  [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SweetAlert2Module.forRoot(),
  ],
  providers: 
  [
    BarcodeScanner,
    Vibration,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
