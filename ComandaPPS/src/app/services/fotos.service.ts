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
import { Vibration } from '@ionic-native/vibration/ngx';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  items: any;
  nombreFoto = '';
  disable: boolean = false;
  loading = false;

  constructor(private auth: AuthService, private router: Router, private storage: AngularFireStorage, private firestore: FirestoreService, private vibration: Vibration) {
  }

  async TakePhoto(objeto: any){

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
      this.vibration.vibrate(2000);
      this.mostrarToast({text: 'La foto es obligatorio, se cancela el registro', title: 'Error registro', icon: 'error', time: 1500, timerProgressBar: true})
    }

    let dataUrl = capturedPhoto.dataUrl;
    let time = Date.now().toString();
    this.nombreFoto = '/' + 'foto' + time; // this.auth.usuarioActual?.email + time;
    let ref = this.storage.ref(`fotos/` + this.nombreFoto);


    ref.putString(dataUrl, 'data_url',{
      contentType: 'image/jpeg',
    }).then(()=>{
      this.uploadPhoto(objeto);
    });
  }

  async subirArchivos(formData: FormData, nombres: string[], objeto?: any){
    let archivo0 = formData.get('archivo0');
    let referencia0;
    let referencia1;
    let referencia2;
    
    if(archivo0)
    {
      let nombre0 = Date.now().toString() + nombres[0];
      referencia0 = this.storage.ref('fotos/' + nombre0);
      await this.storage.upload('fotos/' + nombre0, archivo0);
    }
    let archivo1 = formData.get('archivo1');
    if(archivo1)
    {
      let nombre1 = Date.now().toString() + nombres[1];
      referencia1 = this.storage.ref('fotos/' + nombre1);
      await this.storage.upload('fotos/' + nombre1, archivo1);
    }

    let archivo2 = formData.get('archivo2');

    if(archivo2)
    {
      let nombre2 = Date.now().toString() + nombres[2];
      referencia2 = this.storage.ref('fotos/' + nombre2);
      await this.storage.upload('fotos/' + nombre2, archivo2);
    }

    if(archivo0 && archivo1 && archivo2)
    {
      referencia0.getDownloadURL().subscribe((url0: any) => {
        objeto.fotos = [];
        objeto.fotos.push(url0);

          referencia1.getDownloadURL().subscribe((url1: any) => {
            objeto.fotos.push(url1);

              referencia2.getDownloadURL().subscribe((url2: any) => {
                objeto.fotos.push(url2);

                if(objeto?.descripcion)
                {
                  this.auth.AltaProducto(objeto);
                }
                else
                {
                  this.auth.AltaEncuesta(objeto);
                  this.router.navigate(['grafico-cliente']);
                }
              });
          });
      }); 
    }
    else if(archivo0 && archivo1)
    {
      referencia0.getDownloadURL().subscribe((url0: any) => {
        objeto.fotos = [];
        objeto.fotos.push(url0);

          referencia1.getDownloadURL().subscribe((url1: any) => {
            objeto.fotos.push(url1);
            
            this.auth.AltaEncuesta(objeto);
            this.router.navigate(['grafico-cliente']);
                
          });
      }); 
    }
    else
    {
      referencia0.getDownloadURL().subscribe((url0: any) => {
        objeto.fotos = [];
        objeto.fotos.push(url0);
        this.auth.AltaEncuesta(objeto);
        this.router.navigate(['grafico-cliente']);
      });
    }
  }


    uploadPhoto(objeto: any){
      let storage = this.storage.ref(`/fotos`).child(this.nombreFoto);
      storage.getDownloadURL().toPromise()
      .then( (url:any) =>{

        objeto.foto = url;

        if(objeto?.perfil)
        {
          this.auth.AltaSupervisor(objeto);
          this.router.navigate(['/login']);
        }
        else if(objeto?.tipo)
        {
          this.auth.AltaEmpleado(objeto);
          this.router.navigate(['/login']);

        }
        else if(objeto?.cantidadComensales){

          this.auth.AltaMesa(objeto);
        }
        else
        {
          this.auth.AltaCliente(objeto);
          if(objeto.tipoCliente === "anonimo")
          {
            this.auth.usuarioActual = objeto;
            this.router.navigate(['/ingreso-local']);
          }
          else
          {
            this.router.navigate(['/login']);
          }
        }

        this.loading = false;
        this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});

      }).catch(()=>{
        this.mostrarToast({title: "Error", text:"Error al subir la foto, intentenlo nuevamente", icon: 'error', time: 1500,timeProgressBar:true})
        this.vibration.vibrate(2000);
        this.auth.borrarUsuarioActual();
        this.loading = false;
      });
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }
}