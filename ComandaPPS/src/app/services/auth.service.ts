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
  tipoUsuario: string = '';
  
  //Clientes
  clientes : Observable<any[]>;
  clienteCollection : AngularFirestoreCollection<any>;
  
  //Mesas
  mesas : Observable<any[]>;
  mesaCollection : AngularFirestoreCollection<any>;
  
  //Productos
  productos : Observable<Producto[]>;
  productoCollection : AngularFirestoreCollection<Producto>;
  
  //Empleados
  empleados : Observable<any[]>;
  empleadoCollection : AngularFirestoreCollection<any>;

  //Supervisores/Dueños
  supervisores : Observable<any[]>;
  supervisorCollection : AngularFirestoreCollection<any>;

  //Encuestas
  encuestas : Observable<any>;
  encuestaCollection : AngularFirestoreCollection<any>;

  //Pedidos
  pedidos : Observable<any>;
  pedidosCollection : AngularFirestoreCollection<any>;

  constructor(private auth: AngularFireAuth, private router: Router, private firestore : AngularFirestore) {
    //Clientes
    this.clienteCollection = firestore.collection<any>('clientes');
    
    ///Mesas
    this.mesaCollection = firestore.collection<Mesa>('mesas');
    
    ///Productos
    this.productoCollection = firestore.collection<Producto>('productos');
    
    //Empleados
    this.empleadoCollection = firestore.collection<any>('empleados');

    //Dueños/Supervisores
    this.supervisorCollection = firestore.collection<any>('supervisores');

    //Encuestas
    this.encuestaCollection = firestore.collection<any>('encuestas');

    //Pedidos
    this.pedidosCollection = firestore.collection<any>('pedidos');
  }

  getPedidos(){
    return this.pedidosCollection.valueChanges({idField : 'id'});
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

  
  TraerPedidosGenerico(campo : any , valor : any){
    return this.firestore.collection('pedidos', ref => ref.where(campo, '==', valor)).valueChanges({idField: 'id'})
  }

  TraerPedidos(){
    return this.firestore.collection('pedidos').valueChanges({idField: 'id'});
  }

  PedidoCliente(clienteID: string, pedido){
    return this.firestore.collection('clientes').doc(clienteID).update({pedido: pedido});
  }

  TraerClientesDeshabilitados(){
    return this.firestore.collection('clientes', ref => ref.where('habilitado', '==', false)).valueChanges({idField: 'id'})
  }

  TraerGenerico(coleccion : any, campo : any, valor : any){
    console.log(coleccion,campo,valor);
    return this.firestore.collection(coleccion, ref => ref.where(campo, '==', valor)).valueChanges({idField: 'id'})
  }

  SetearMesaCliente(cliente : any, mesa : any){
    return this.clienteCollection.doc(cliente.id).update({mesaAsignada: mesa});
  }


  UpdateEstadoCliente(cliente : any){
    this.clienteCollection.doc(cliente.id).update({habilitado: cliente.habilitado});
  }

  UpdatearMesaCliente(mesa: any, valor : boolean){
    return this.mesaCollection.doc(mesa.id).update({cliente: valor});
  }

  updateClienteActual(cliente: any){
    return this.clienteCollection.doc(cliente.id).update({mesaAsignada: cliente.mesaAsignada, pedido: cliente.pedido, listaEspera: cliente.listaEspera});
  }

  UpdatearIngresoCliente(cliente : any, valor : boolean){
    return this.clienteCollection.doc(cliente.id).update({'ingresoMesa': valor});
  }

  UpdatearEstadoPedido(idPedido : any, valor : any){
    return this.pedidosCollection.doc(idPedido).update({'estado': valor})
  }

  
  UpdatearEtapasRealizadasPedido(idPedido : any, valor : any){
    return this.pedidosCollection.doc(idPedido).update({'etapasRealizadas': valor, cocteleriaEntregado: true})
  }

  UpdatearEtapasRealizadasPedidoCocina(idPedido : any, valor : any){
    return this.pedidosCollection.doc(idPedido).update({'etapasRealizadas': valor, cocinaEntregado: true})
  }

  TraerPedido(idPedido : any){
    return this.pedidosCollection.doc(idPedido).valueChanges({idField : 'id'});
  }
  AltaCliente(cliente : Cliente){
    cliente.listaEspera = false;
    // this.usuarioActual = cliente;
    return this.clienteCollection.add({...cliente});
  }

  AltaMesa(mesa : any){
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
    this.tipoUsuario = 'cliente';

    if(usuario.length === 0)
    {
      usuario = await this.firestore.collection('empleados', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
      this.tipoUsuario = 'empleado';
    }
    if(usuario.length === 0)
    {
      usuario = await this.firestore.collection('supervisores', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
      this.tipoUsuario = 'supervisor';
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

  guardarToken(usuario, perfil, token){
    if(perfil === 'cliente')
    {
      this.clienteCollection.doc(usuario.id).update({pushToken: token});
    }
    else if(perfil === 'supervisor')
    {
      this.supervisorCollection.doc(usuario.id).update({pushToken: token});
    }
    else
    {
      this.empleadoCollection.doc(usuario.id).update({pushToken: token});
    }
  }
}
