import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Firebase
import { AuthService } from './auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Plugins
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  items: any;
  referenciaFotos: any;
  // chatDb = '/fotos';
  nombreFoto = '';
  disable: boolean = false;
  loading = false;

  constructor(private auth: AuthService, private router: Router, private storage: AngularFireStorage, firestore: AngularFirestore) {
    // this.referenciaFotos = this.firestore.
    this.items = firestore.collection('fotos').valueChanges({idField: 'id'});
  }

  async TakePhoto(tipo: string){
    let capturedPhoto = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      webUseInput: true,
    });

    let dataUrl = capturedPhoto.dataUrl;
    let time = Date.now().toString();
    // this.nombreFoto = '/' + this.auth.usuario?.email + hora;
    let ref = this.storage.ref(`fotos/` + this.nombreFoto);

    // this.loading = true;

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
        // const itemsRef = this.db.list('/fotos');
        // let user = this.auth.isLoggedIn?.email.split('@');
        let d = new Date();
        let day: any = d.getDate();
        let month: any = d.getMonth();
        let year = d.getFullYear();

        if(day < 10) {
          day = '0' + day;
        }
        if(month < 10) {
          month = '0' + month;
        }

        let photo: any = {
          url: url,
          // userUID: this.auth.usuarioActual?.uid,
        }

        // itemsRef.push(photo);
      });
      // this.loading = false;
  }
}