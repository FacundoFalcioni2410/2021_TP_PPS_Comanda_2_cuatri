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

    this.userService.TraerPedidos()
    .subscribe((data)=>{
      this.pedidos = data;
      for(let pedido of this.pedidos)
      {
        if(pedido.etapasRealizadas === pedido.etapasTotales && pedido.estado !== 'listo' && pedido.estado !== 'entregado')
        {
          pedido.estado = 'listo';
          this.userService.UpdatearEstadoPedido(pedido.id, pedido.estado);
        }
      }
    });
  }

  ngOnInit() {
  }

  Entregar(pedido: any){
    pedido.estado = 'entregado';
    this.userService.UpdatearEstadoPedido(pedido.id, pedido.estado)
    .then(() =>{
      Swal.fire({
        title:'Asignado',
        text: 'El pedido fue entregado al cliente correspondiente',
        icon:'success',
        toast: true,
        position: 'bottom',
        timer:2000,
        timerProgressBar: true
      });
    });
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


  ConfirmarPago(pedido : any){
    this.userService.UpdatearEstadoPedido(pedido.id,'finalizado')
    .then(()=>{
    
      Swal.fire({
        title:'Pedido finalizado',
        text: 'Se confirmó el pago y finalizó el pedido',
        icon:'success',
        toast: true,
        position: 'bottom',
        timer:2000,
        timerProgressBar: true
      });
    });
  }
}
