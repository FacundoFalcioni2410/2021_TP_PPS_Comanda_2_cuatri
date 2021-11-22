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

  intervalo:any;

  usuarioActual: any;
  loading: boolean = false;
  tipoUsuario: string = '';
  logeado: boolean = false;

  //Clientes
  clientes: Observable<any[]>;
  clienteCollection: AngularFirestoreCollection<any>;

  //Mesas
  mesas: Observable<any[]>;
  mesaCollection: AngularFirestoreCollection<any>;

  //Productos
  productos: Observable<Producto[]>;
  productoCollection: AngularFirestoreCollection<Producto>;

  //Empleados
  empleados: Observable<any[]>;
  empleadoCollection: AngularFirestoreCollection<any>;

  //Supervisores/Dueños
  supervisores: Observable<any[]>;
  supervisorCollection: AngularFirestoreCollection<any>;

  //Encuestas
  encuestas: Observable<any>;
  encuestaCollection: AngularFirestoreCollection<any>;

  //Pedidos
  pedidos: Observable<any>;
  pedidosCollection: AngularFirestoreCollection<any>;

  /* Reservas ARRAYS */
  reservasArray: any;
  mesasArray: any;

  constructor(private auth: AngularFireAuth, private router: Router, private firestore: AngularFirestore) {
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



    this.chequearReservas();


  }

  chequearReservas() {
    /* HAGO UN MÉTODO QUE VA A CHEQUEAR SI UNA MESA RESERVADA YA CADUCÓ */

    this.getMesasObs()
      .subscribe((data) => {
        this.mesasArray = data;

      });

    this.getClientes()
      .subscribe(val => {

        var fecha: Date;
        fecha = new Date();

        var day = fecha.getDate();
        var month = fecha.getMonth() + 1; // 1 - 2 - 3 - 4 etc
        var year = fecha.getFullYear(); // ok
        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
        var time = fecha.getHours() + ":" + fecha.getMinutes();
        var now = new Date(year, month, day).getTime();



        this.reservasArray = val;

        for (let reserva of this.reservasArray) {
          if (reserva.reserva == true) {

            let numMesa = Number.parseInt(reserva.mesaAsignada, 10);
            let mesaObj: any;

            for (let mesa of this.mesasArray) {
              if (mesa.numero == numMesa) {
                mesaObj = mesa;
                break;
              }
            }



            var aux = reserva.fecha.split("-");

            var aux_hora = reserva.hora.split(":");

            var fecha2 = new Date(aux[0], aux[1], aux[2]).getTime();

            /* Viene logica */

            var diff = fecha2 - now;

            if (diff < 0) {

              /* Está en pasado, caducó, procedo a eliminar la reserva */
              if (reserva.reservaEstado != 'sentado') { this.eliminarReserva(reserva, mesaObj); }


            } else if (diff == 0) {

              /* Mismo dia */
              /* Chequeo horario */

              var dif_h = aux_hora[0] - horas;
              var dif_mins = aux_hora[1] - minutos;

              /* Si la hora es la misma, chequeo minutos para que sea más de 40 minutos */
              if (dif_h == 0) {

                if (dif_mins < 40) {
                  /* Si entra acá es porque caducó la reserva, procedo a eliminar la reserva */
                  if (reserva.reservaEstado != 'sentado') { this.eliminarReserva(reserva, mesaObj); }

                } else if (dif_mins >= 40) {
                  /* Si los minutos son correctos (más de 40 o igual), no se hace nada */

                  // Aún a tiempo

                }

              } else if (dif_h > 0) {

                if (dif_h == 1) {
                  /* Uso la misma lógica que en la reserva de una mesa (caso especial) */
                  /* Acá uso una lógica mia: hago 60 minutos - (minutos_futuros - minutos_actuales) */
                  var result = 60 - (minutos - aux_hora[1]);

                  if (result < 40) {

                    /* Elimino la reserva */
                    if (reserva.reservaEstado != 'sentado') { this.eliminarReserva(reserva, mesaObj); }

                  } else {
                    /* Si los minutos son correctos (más de 40 o igual), no se hace nada */

                    // Aún a tiempo

                  }

                }

              }

            } else if (diff > 0) {
              /* Fecha futura*/
              // Hay tiempo
            }



          }
        }


      });
  }


  eliminarReserva(cliente: any, mesa: any) {
    this.clienteCollection.doc(cliente.id).update({ fecha: "", hora: "", mesaAsignada: "0", listaEspera: false, reserva: false, reservaEstado: "" });
    this.UpdatearMesaCliente(mesa, false);
    this.stopTimer();
  }

  getPedidos() {
    return this.pedidosCollection.valueChanges({ idField: 'id' });
  }

  getSupervisores() {
    return this.supervisorCollection.valueChanges({ idField: 'id' });
  }

  getEmpleados() {
    return this.empleadoCollection.valueChanges({ idField: 'id' });
  }

  getEncuestas() {
    return this.encuestaCollection.valueChanges({ idField: 'id' });
  }

  getProductos() {
    return this.productoCollection.valueChanges({ idField: 'id' });
  }


  /* MI METODO */
  getMesasObs() {
    return this.mesaCollection.valueChanges({ idField: 'id' });
  }

  getMesas() {
    return this.mesaCollection.valueChanges({ idField: 'id' });
  }

  getClientes() {
    return this.clienteCollection.valueChanges({ idField: 'id' });
  }


  /* MI METODO */
  getClientesObs() {
    return this.clienteCollection.valueChanges();
  }

  getUser() {
    var usr = this.clienteCollection.doc(this.usuarioActual.id).valueChanges({ idField: 'id' })
    return usr;
  }

  /* MI METODO */
  getUserObs() {
    return this.clienteCollection.doc(this.usuarioActual.id).valueChanges({ idField: 'id' }); //RETORNA AL CLIENTE ACTUAL
  }

  async borrarUsuarioActual() {
    let user = await this.auth.currentUser;

    user.delete().then(() => {
    });

    if (this.usuarioActual?.perfil) {
      let clienteFirestore = await this.firestore.collection('supervisor', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();

      this.firestore.collection("supervisor").doc(clienteFirestore[0].id).delete();
    }
    else if (this.usuarioActual?.tipo) {
      let clienteFirestore = await this.firestore.collection('empleados', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();

      this.firestore.collection("empleados").doc(clienteFirestore[0].id).delete();
    }
    else {
      let clienteFirestore = await this.firestore.collection('clientes', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();

      this.firestore.collection("clientes").doc(clienteFirestore[0].id).delete();
    }
  }


  TraerPedidosGenerico(campo: any, valor: any) {
    return this.firestore.collection('pedidos', ref => ref.where(campo, '==', valor)).valueChanges({ idField: 'id' })
  }

  TraerPedidos() {
    return this.firestore.collection('pedidos').valueChanges({ idField: 'id' });
  }

  PedidoCliente(clienteID: string, pedido) {
    return this.firestore.collection('clientes').doc(clienteID).update({ pedido: pedido });
  }

  TraerClientesDeshabilitados() {
    return this.firestore.collection('clientes', ref => ref.where('habilitado', '==', false)).valueChanges({ idField: 'id' })
  }

  TraerGenerico(coleccion: any, campo: any, valor: any) {
    return this.firestore.collection(coleccion, ref => ref.where(campo, '==', valor)).valueChanges({ idField: 'id' })
  }

  SetearMesaCliente(cliente: any, mesa: any) {
    return this.clienteCollection.doc(cliente.id).update({ mesaAsignada: mesa });
  }

  /* Poner la mesa como reservada y poner la fecha y hora */

  SetearMesaClienteReserva(cliente: any, estado: any, fecha_: any, hora_: any) {
    this.MiFlagSetter(cliente);
    return this.clienteCollection.doc(cliente.id).update({ reserva: estado, fecha: fecha_, hora: hora_, listaEspera: true, reservaEstado: "pendiente", flag: 0 });
  }


  /* Metodo para detectar cambios en la colección en el caso de chequear el horario caducado de reserva */
  MiFlagSetter(cliente:any){
    var key = 0;
    this.intervalo = setInterval(()=>{

      if(key == 0){
        this.clienteCollection.doc(cliente.id).update({ flag: key });
        key = 1;
      }
      if(key == 1){
        this.clienteCollection.doc(cliente.id).update({ flag: key });
        key = 0;
      }

    },60000);
    
  }
  stopTimer(){clearInterval(this.intervalo);}

  /* Aceptar o rechazar  reserva*/
  AceptarRechazarReserva(cliente: any, estado: any, mesa: any) {
    if (estado == 'rechazado') {
      
      this.clienteCollection.doc(cliente.id).update({ fecha: "", hora: "", mesaAsignada: "0", listaEspera: false, reserva: false, reservaEstado: "rechazado" });
      this.UpdatearMesaCliente(mesa, false);
      this.stopTimer();
    }

    
    /* Siendo la mesa ya asignada */
    return this.clienteCollection.doc(cliente.id).update({ reservaEstado: estado }); // pendiente, aceptado, rechazado
  }


  UpdateEstadoCliente(cliente: any) {
    return this.clienteCollection.doc(cliente.id).update({ habilitado: cliente.habilitado });
  }

  UpdatearMesaCliente(mesa: any, valor: boolean) {
    return this.mesaCollection.doc(mesa.id).update({ cliente: valor });
  }

  updateClienteActual(cliente: any) {
    return this.clienteCollection.doc(cliente.id).update({ mesaAsignada: cliente.mesaAsignada, pedido: cliente.pedido, listaEspera: cliente.listaEspera });
  }

  UpdatearIngresoCliente(cliente: any, valor: boolean) {
    return this.clienteCollection.doc(cliente.id).update({ 'ingresoMesa': valor });
  }

  UpdatearEstadoPedido(idPedido: any, valor: any) {
    return this.pedidosCollection.doc(idPedido).update({ 'estado': valor })
  }

  /* Para agregar descuentos */
  UpdatearPrecioTotalPedido(idPedido: any, valor: any) {
    return this.pedidosCollection.doc(idPedido).update({ 'precioTotal': valor })
  }


  UpdatearEtapasRealizadasPedido(idPedido: any, valor: any) {
    return this.pedidosCollection.doc(idPedido).update({ 'etapasRealizadas': valor, cocteleriaEntregado: true })
  }

  UpdatearEtapasRealizadasPedidoCocina(idPedido: any, valor: any) {
    return this.pedidosCollection.doc(idPedido).update({ 'etapasRealizadas': valor, cocinaEntregado: true })
  }

  TraerPedido(idPedido: any) {
    return this.pedidosCollection.doc(idPedido).valueChanges({ idField: 'id' });
  }
  AltaCliente(cliente: Cliente) {
    cliente.listaEspera = false;
    // this.usuarioActual = cliente;
    return this.clienteCollection.add({ ...cliente });
  }

  AltaMesa(mesa: any) {
    return this.mesaCollection.add({ ...mesa });
  }

  AltaProducto(producto: Producto) {
    return this.productoCollection.add({ ...producto });
  }

  AltaEmpleado(empleado: Empleado) {
    return this.empleadoCollection.add({ ...empleado });
  }

  AltaSupervisor(supervisor: Supervisor) {
    return this.supervisorCollection.add({ ...supervisor });
  }

  SubirPedido(pedido: any) {
    return this.pedidosCollection.add(pedido)
  }

  AltaEncuesta(encuesta: any) {
    return this.encuestaCollection.add({ ...encuesta });
  }

  async updateListaEsperaCliente(id: string, valor: boolean) {
    return await this.firestore.collection('clientes').doc(id).update({ listaEspera: valor });
  }

  async getCliente(uid: string) {
    return await this.firestore.collection('clientes', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();
  }

  async getSupervisor(uid: string) {
    return await this.firestore.collection('supervisores', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();
  }

  async getEmpleado(uid: string) {
    return await this.firestore.collection('empleados', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();
  }

  async getUsers(email: string) {
    let usuario: any = await this.firestore.collection('clientes', ref => ref.where('email', '==', email).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();
    this.tipoUsuario = 'cliente';

    if (usuario.length === 0) {
      usuario = await this.firestore.collection('empleados', ref => ref.where('email', '==', email).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();
      this.tipoUsuario = 'empleado';
    }
    if (usuario.length === 0) {
      usuario = await this.firestore.collection('supervisores', ref => ref.where('email', '==', email).limit(1)).valueChanges({ idField: 'id' }).pipe(take(1)).toPromise();
      this.tipoUsuario = 'supervisor';
    }

    this.usuarioActual = usuario[0];
    this.logeado = true;

    return usuario[0];
  }

  login(user: any) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  logOut() {
    localStorage.removeItem("clu");
    localStorage.clear();
    return this.auth.signOut();
  }

  registro(user: any) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  mostrarToast(options: any) {
    Swal.fire(options);
  }

  guardarToken(usuario, perfil, token) {
    console.log(usuario, perfil, token);
    if (perfil === 'cliente') {
      this.clienteCollection.doc(usuario.id).update({ pushToken: token });
    }
    else if (perfil === 'supervisor') {
      this.supervisorCollection.doc(usuario.id).update({ pushToken: token });
    }
    else {
      this.empleadoCollection.doc(usuario.id).update({ pushToken: token });
    }
  }
}
