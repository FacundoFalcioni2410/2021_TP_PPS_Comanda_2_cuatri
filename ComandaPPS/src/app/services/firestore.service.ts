import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {
  }

  AltaFoto(coleccion: string, item: any){
    return this.firestore.collection(coleccion).add(item);
  }
}
