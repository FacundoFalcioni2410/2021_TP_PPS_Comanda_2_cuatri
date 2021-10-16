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

  async TakePhoto(tipo: string){
    let capturedPhoto = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      webUseInput: true,
    });

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
          userUID: this.auth.usuarioActual?.uid,
        }

        if(this.auth.usuarioActual?.perfil === 'supervisor' || this.auth.usuarioActual?.perfil === 'dueño')
        {
          this.firestore.AltaFoto('supervisorFotos', photo);
        }
        else if(this.auth.usuarioActual?.perfil === 'clientes')
        {
          this.firestore.AltaFoto('clientesFotos', photo);
        }
        else if(this.auth.usuarioActual?.perfil === 'empleados')
        {
          this.firestore.AltaFoto('empleadosFotos', photo);
        }
        
        this.loading = false;
      });
  }
}