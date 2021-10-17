import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';

// Firebase
import { AuthService } from './auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

//Plugins
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

//Toast
import Swal from 'sweetalert2/src/sweetalert2.js'

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
      this.loading = false;
      this.auth.borrarUsuarioActual();
    }

    let dataUrl = capturedPhoto.dataUrl;
    let time = Date.now().toString();
    this.nombreFoto = '/' + this.auth.usuarioActual?.email + time;
    let ref = this.storage.ref(`fotos/` + this.nombreFoto);


    ref.putString(dataUrl, 'data_url',{
      contentType: 'image/jpeg',
    }).then(()=>{
      this.uploadPhoto();
    });
  }

  async subirArchivos(formData: FormData, nombres: string[], producto: any){
    let archivo0 = formData.get('archivo0');
    let archivo1 = formData.get('archivo1');
    let archivo2 = formData.get('archivo2');
    let nombres0 = Date.now().toString() + nombres[0];
    let nombres1 = Date.now().toString() + nombres[1];
    let nombres2 = Date.now().toString() + nombres[2];
    let referencia0 = this.storage.ref(nombres0);
    let referencia1 = this.storage.ref(nombres1);
    let referencia2 = this.storage.ref(nombres2);
    await this.storage.upload(nombres0, archivo0);
    await this.storage.upload(nombres1, archivo1);
    await this.storage.upload(nombres2, archivo2);

    referencia0.getDownloadURL().subscribe((url0: any) => {
      producto.fotos = [];
      producto.fotos.push(url0);
      referencia1.getDownloadURL().subscribe((url1: any) => {
        producto.fotos.push(url1);
        referencia2.getDownloadURL().subscribe((url2: any) => {
          producto.fotos.push(url2);
          this.auth.AltaProducto(producto);
          this.firestore.AltaFoto('productoFotos', {nombreProducto: producto.nombre, fotos: producto.fotos});
        });
      });
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
        this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});

      }).catch(()=>{
        this.auth.borrarUsuarioActual();
        this.loading = false;
      });
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }
}