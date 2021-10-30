import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-bartender',
  templateUrl: './lista-bartender.page.html',
  styleUrls: ['./lista-bartender.page.scss'],
})
export class ListaBartenderPage implements OnInit {

  productos: any[] = [];
  cocteles: any[] = [];
  pedidos: any[] = [];
  pedidoContenedor: any;

  h = 0;
  m = 0;
  s = 0;
  id: any;

  constructor(private userService: AuthService) {

    this.userService.getPedidos()
      .subscribe((data: any) => {
        this.cocteles = [];
        for (let pedido of data) {
          console.log('pedido ', pedido);
          for (let producto of pedido.productos) {
            producto.id = pedido.id;
            if (producto.descripcion == 'coctel') {
              this.cocteles.push(producto);
            }
          }
        }

      });


  }

  ngOnInit() {
  }

  PrepararCoctel(coctel: any) {
    let idCoctel = coctel.id;
    this.userService.TraerPedido(idCoctel)
      .then((data) => {
        console.log(data);
        this.userService.UpdatearEstadoPedido(idCoctel, 'en preparacion')
          .then(() => {
            console.log('updateado el estado del pedido');
          })
      });
  }

  EntregarCoctel(coctel: any) {
    let idCoctel = coctel.id;
    this.userService.TraerPedido(idCoctel)
      .then((data) => {
        console.log(data);
        data.etapasRealizadas++;
        this.userService.UpdatearEtapasRealizadasPedido(idCoctel, data.etapasRealizadas)
          .then(() => {
            console.log('updateadas las estapas realizadas ');
          })
      });
  }
}
