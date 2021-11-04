import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  activado : boolean = true;

  constructor(private nativeAudio : NativeAudio) {

  }

  async Cargar(){
    await this.nativeAudio.preloadComplex('transicion', 'assets/sounds/transicion.wav',1,1,0);
  }

  Descargar(){
    this.nativeAudio.unload('transicion');
  }

  async PlayAudio(){
    if(this.activado){
      await this.nativeAudio.play('transicion');
    }
  }

  toggleAudio(){
    this.activado = !this.activado;
  }
}
