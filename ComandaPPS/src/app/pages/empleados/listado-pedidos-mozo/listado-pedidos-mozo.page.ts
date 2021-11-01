import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-pedidos-mozo',
  templateUrl: './listado-pedidos-mozo.page.html',
  styleUrls: ['./listado-pedidos-mozo.page.scss'],
})
export class ListadoPedidosMozoPage implements OnInit {

  pedidos : any;

  constructor(public userService : AuthService) {

    this.userService.TraerPedidosGenerico('estado','pedido')
    .subscribe((data)=>{
      console.log(data);
      this.pedidos = data;
    });
  }

  ngOnInit() {
  }

  Asignar(pedido : any){
    this.userService.UpdatearEstadoPedido(pedido.id,'aceptado')
    .then(()=>{
      Swal.fire({
        title:'Asignado',
        text: 'El pedido se le asignó al empleado correspondiente',
        icon:'success',
        toast: true,
        position: 'bottom',
        timer:2000,
        timerProgressBar: true
      });
    });
  }
}
