import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  items : Observable<any[]>;
  
  constructor(private db : AngularFireDatabase) {
    this.items = this.db.list('/chat').valueChanges();
  }


  MandarMensaje(mensaje : any){

    const itemRef = this.db.list('/chat');
    itemRef.push(mensaje);

  }
}