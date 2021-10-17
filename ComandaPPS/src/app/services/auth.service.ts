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
      // this.auth.authState(res =>{
      //   res.delete()
      // })

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
