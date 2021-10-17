import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { Cliente } from '../models/cliente';
import { FotosService } from './fotos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioActual: any;
  loading: boolean = false;
  clientes : Observable<Cliente[]>;
  clienteCollection : AngularFirestoreCollection<Cliente>;

  constructor(private auth: AngularFireAuth, private router: Router, private firestore : AngularFirestore) { 

    this.clienteCollection = firestore.collection<Cliente>('clientes');
    this.clientes = this.clienteCollection.valueChanges({idField: 'id'});

  }

  async borrarUsuarioActual(){
    let user = await this.auth.currentUser;

    user.delete().then( () =>{
      console.log('deleted');
    });

    if(this.usuarioActual?.perfil)
    {
      let clienteFirestore = await this.firestore.collection('supervisor', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("supervisor").doc(clienteFirestore[0].id).delete();

      let fotoFirestore = await this.firestore.collection('supervisorFotos', ref => ref.where('userUID', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("supervisorFotos").doc(clienteFirestore[0].id).delete();
    }
    else if(this.usuarioActual?.tipo)
    {
      let clienteFirestore = await this.firestore.collection('empleados', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("empleados").doc(clienteFirestore[0].id).delete();

      let fotoFirestore = await this.firestore.collection('empleadosFotos', ref => ref.where('userUID', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("empleadosFotos").doc(clienteFirestore[0].id).delete();
    }
    else
    {
      let clienteFirestore = await this.firestore.collection('clientes', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("clientes").doc(clienteFirestore[0].id).delete();

      let fotoFirestore = await this.firestore.collection('clientesFotos', ref => ref.where('userUID', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("clientesFotos").doc(clienteFirestore[0].id).delete();
    }
  }

  AltaCliente(cliente : Cliente){
    this.usuarioActual = cliente;
    return this.clienteCollection.add({...cliente});
  }

  async getCliente(uid: string){
    return await this.firestore.collection('administradores', ref => ref.where('uid', '==', uid).limit(1)).valueChanges().pipe(take(1)).toPromise();
  }

  login(user: any){
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
    .then( res =>{
      this.mostrarToast({text: 'Datos correctos',toast: true,position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'success'});
      setTimeout(()=>{
        this.loading = false;
      },1500);
    })
    .catch( err =>{
      setTimeout(()=>{
        this.loading = false;
      },1500);
    });;
  }

  registro(user: any){
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }
}
