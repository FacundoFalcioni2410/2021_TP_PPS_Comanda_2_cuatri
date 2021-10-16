import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  clientes : Observable<Cliente[]>;
  clienteCollection : AngularFirestoreCollection<Cliente>;

  constructor(private auth: AngularFireAuth, private router: Router, private firestore : AngularFirestore) { 

    this.clienteCollection = firestore.collection<Cliente>('clientes');
    this.clientes = this.clienteCollection.valueChanges();

  }

  AltaCliente(cliente : Cliente){
    return this.clienteCollection.add({... cliente});
  }
}
