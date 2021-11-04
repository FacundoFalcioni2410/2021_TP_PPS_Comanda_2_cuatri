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
    await this.nativeAudio.preloadComplex('transicion', 'assets/sounds/transicion.mp3',1,1,0);
  }

  Descargar(){
    this.nativeAudio.unload('transicion');
  }

  async PlayAudio(){
    
    if(this.activado){

      await this.nativeAudio.play('transicion');
    }
  }

  ActivarDesactivarAudio(){
    if(this.activado){
      this.activado = false;
    }else{
      this.activado = true;
    }
  }
}
