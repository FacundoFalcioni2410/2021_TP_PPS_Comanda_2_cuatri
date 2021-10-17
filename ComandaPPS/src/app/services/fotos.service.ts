import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Firebase
import { AuthService } from './auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

//Plugins
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  items: any;
  nombreFoto = '';
  disable: boolean = false;
  loading = false;

  constructor(private auth: AuthService, private router: Router, private storage: AngularFireStorage, private firestore: FirestoreService) {
  }

  async TakePhoto(){

    let capturedPhoto : any;

    try{
        capturedPhoto = await Camera.getPhoto({
          quality: 100,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera,
          webUseInput: true,
        });
    }
    catch(e){
      
      this.auth.borrarUsuarioActual();
    }

    let dataUrl = capturedPhoto.dataUrl;
    let time = Date.now().toString();
    this.nombreFoto = '/' + this.auth.usuarioActual?.email + time;
    let ref = this.storage.ref(`fotos/` + this.nombreFoto);

    this.loading = true;

    ref.putString(dataUrl, 'data_url',{
      contentType: 'image/jpeg',
    }).then(()=>{
      this.uploadPhoto();
    });
  }

  async TakePhotos(){

    let capturedPhoto : any;

    try{
        capturedPhoto = await Camera.getPhoto({
          quality: 100,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Photos,
          webUseInput: true,
        });

        console.log(capturedPhoto);
    }
    catch(e){
      
      this.auth.borrarUsuarioActual();
    }

    let dataUrl = capturedPhoto.dataUrl;
    let time = Date.now().toString();
    this.nombreFoto = '/' + this.auth.usuarioActual?.email + time;
    let ref = this.storage.ref(`fotos/` + this.nombreFoto);

    this.loading = true;

    ref.putString(dataUrl, 'data_url',{
      contentType: 'image/jpeg',
    }).then(()=>{
      this.uploadPhoto();
    });
  }

    uploadPhoto(){
      let storage = this.storage.ref(`/fotos`).child(this.nombreFoto);
      storage.getDownloadURL().toPromise()
      .then( (url:any) =>{
        let photo: any = {
          url: url,
          userUID: this.auth.usuarioActual?.uid,
        }

        if(this.auth.usuarioActual?.perfil)
        {
          this.firestore.AltaFoto('supervisorFotos', photo);
        }
        else if(this.auth.usuarioActual?.tipo)
        {
          this.firestore.AltaFoto('empleadosFotos', photo);
        }
        else
        {
          this.firestore.AltaFoto('clientesFotos', photo);
        }

        this.loading = false;
      }).catch(()=>{
        this.auth.borrarUsuarioActual();
      });
  }
}