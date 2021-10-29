import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { Cliente } from '../models/cliente';
import { Empleado } from '../models/empleado';
import { Mesa } from '../models/mesa';
import { Producto } from '../models/producto';
import { Supervisor } from '../models/supervisor';
import { FotosService } from './fotos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioActual: any;
  loading: boolean = false;
  
  //Clientes
  clientes : Observable<Cliente[]>;
  clienteCollection : AngularFirestoreCollection<Cliente>;
  
  //Mesas
  mesas : Observable<Mesa[]>;
  mesaCollection : AngularFirestoreCollection<Mesa>;
  
  //Productos
  productos : Observable<Producto[]>;
  productoCollection : AngularFirestoreCollection<Producto>;
  
  //Empleados
  empleados : Observable<Empleado[]>;
  empleadoCollection : AngularFirestoreCollection<Empleado>;

  //Supervisores/Dueños
  supervisores : Observable<Supervisor[]>;
  supervisorCollection : AngularFirestoreCollection<Supervisor>;

  //Encuestas
  encuestas : Observable<any>;
  encuestaCollection : AngularFirestoreCollection<any>;

  //Pedidos
  pedidos : Observable<any>;
  pedidosCollection : AngularFirestoreCollection<any>;

  constructor(private auth: AngularFireAuth, private router: Router, private firestore : AngularFirestore) {
    //Clientes
    this.clienteCollection = firestore.collection<Cliente>('clientes');
    
    ///Mesas
    this.mesaCollection = firestore.collection<Mesa>('mesas');
    
    ///Productos
    this.productoCollection = firestore.collection<Producto>('productos');
    
    //Empleados
    this.empleadoCollection = firestore.collection<Empleado>('empleados');

    //Dueños/Supervisores
    this.supervisorCollection = firestore.collection<Supervisor>('supervisores');

    //Encuestas
    this.encuestaCollection = firestore.collection<Supervisor>('encuestas');

    //Pedidos
    this.pedidosCollection = firestore.collection<any>('pedidos');
  }

  getSupervisores(){
    return this.supervisorCollection.valueChanges({idField : 'id'});
  }

  getEmpleados(){
    return this.empleadoCollection.valueChanges({idField : 'id'});
  }

  getEncuestas(){
    return this.encuestaCollection.valueChanges({idField : 'id'});
  }

  getProductos(){
    return this.productoCollection.valueChanges({idField : 'id'});
  }

  getMesas(){
    return this.mesaCollection.valueChanges({idField: 'id'});
  }

  getClientes(){
    return this.clienteCollection.valueChanges({idField: 'id'});
  }

  getUser(){
    return this.clienteCollection.doc(this.usuarioActual.id).valueChanges({idField: 'id'})
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
    }
    else if(this.usuarioActual?.tipo)
    {
      let clienteFirestore = await this.firestore.collection('empleados', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("empleados").doc(clienteFirestore[0].id).delete();
    }
    else
    {
      let clienteFirestore = await this.firestore.collection('clientes', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

      this.firestore.collection("clientes").doc(clienteFirestore[0].id).delete();
    }
  }

  TraerClientesDeshabilitados(){
    return this.firestore.collection('clientes', ref => ref.where('habilitado', '==', false)).valueChanges({idField: 'id'})
  }

  TraerGenerico(coleccion : any, campo : any, valor : any){
    return this.firestore.collection(coleccion, ref => ref.where(campo, '==', valor)).valueChanges({idField: 'id'})
  }

  SetearMesaCliente(cliente : any, mesa : any){
    return this.clienteCollection.doc(cliente.id).update({mesaAsignada: mesa});
  }


  UpdateEstadoCliente(cliente : any){
    this.clienteCollection.doc(cliente.id).update({habilitado: cliente.habilitado});
  }

  UpdatearIngresoCliente(cliente : any, valor : boolean){
    return this.clienteCollection.doc(cliente.id).update({'ingresoLocal': valor});
  }

  AltaCliente(cliente : Cliente){
    cliente.listaEspera = false;
    // this.usuarioActual = cliente;
    return this.clienteCollection.add({...cliente});
  }

  AltaMesa(mesa : Mesa){
    return this.mesaCollection.add({...mesa});
  }

  AltaProducto(producto : Producto){
    return this.productoCollection.add({...producto});
  }

  AltaEmpleado(empleado : Empleado){
    return this.empleadoCollection.add({...empleado});
  }

  AltaSupervisor(supervisor : Supervisor){
    return this.supervisorCollection.add({...supervisor});
  }

  SubirPedido(pedido: any){
    return this.pedidosCollection.add(pedido)
  }

  AltaEncuesta(encuesta: any){
    return this.encuestaCollection.add({...encuesta});
  }

  async updateListaEsperaCliente(id: string, valor : boolean){
    return await this.firestore.collection('clientes').doc(id).update({listaEspera: valor});
  }

  async getCliente(uid: string){
    return await this.firestore.collection('clientes', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
  }

  async getSupervisor(uid: string)
  {
    return await this.firestore.collection('supervisores', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
  }

  async getEmpleado(uid: string)
  {
    return await this.firestore.collection('empleados', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
  }

  async getUsers(email: string)
  {
    let usuario: any = await this.firestore.collection('clientes', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
    if(usuario.length === 0)
    {
      usuario = await this.firestore.collection('empleados', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
    }
    if(usuario.length === 0)
    {
      usuario = await this.firestore.collection('supervisores', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
    }
    this.usuarioActual = usuario[0];
    
    return usuario[0];
  }

  login(user: any){
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  registro(user: any){
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }
}
