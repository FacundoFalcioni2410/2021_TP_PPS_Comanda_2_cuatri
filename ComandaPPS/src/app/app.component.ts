import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public audio : AudioService, public platform : Platform) {
    this.InicializarApp();
  }
  
  InicializarApp(){
    this.platform.ready().then(()=>{
      this.audio.Cargar();
    });
  }
}
