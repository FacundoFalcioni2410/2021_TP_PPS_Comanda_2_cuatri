import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cliente-espera-pedido',
  templateUrl: './cliente-espera-pedido.page.html',
  styleUrls: ['./cliente-espera-pedido.page.scss'],
})
export class ClienteEsperaPedidoPage implements OnInit {

  pedidoDelCliente : any;

  constructor(public userService : AuthService) { 

    this.userService.TraerPedido(this.userService.usuarioActual.pedido)
    .subscribe((data)=>{
      console.log(data);
      this.pedidoDelCliente = data;
    });
  }

  ngOnInit() {
  }

}
