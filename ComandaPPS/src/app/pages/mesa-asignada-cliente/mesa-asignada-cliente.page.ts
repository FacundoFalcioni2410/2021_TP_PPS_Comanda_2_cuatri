import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mesa-asignada-cliente',
  templateUrl: './mesa-asignada-cliente.page.html',
  styleUrls: ['./mesa-asignada-cliente.page.scss'],
})
export class MesaAsignadaClientePage implements OnInit {

  pedido: any;

  constructor(public userService: AuthService, public audio : AudioService) {
    this.userService.TraerPedido(this.userService?.usuarioActual?.pedido).subscribe(res =>{
      this.pedido = res;
    });
  }

  ngOnInit() {
  }
}
