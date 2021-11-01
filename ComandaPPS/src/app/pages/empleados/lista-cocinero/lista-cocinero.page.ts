import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-cocinero',
  templateUrl: './lista-cocinero.page.html',
  styleUrls: ['./lista-cocinero.page.scss'],
})
export class ListaCocineroPage implements OnInit {

  productos: any[] = [];
  pedidos: any[] = [];
  pedidoContenedor: any;
  terminado: boolean = false;
  platoPreparado : boolean = false;
  platoFinalizado : boolean = false;

  constructor(private userService: AuthService) {

    this.userService.getPedidos()
      .subscribe((data: any) => {
        this.terminado = false;
        this.pedidos = [];
        for (let pedido of data) {
          if(pedido.estado == 'aceptado' || pedido.estado == 'en preparacion'){

             for (let producto of pedido.productos) {
              console.log(producto.descripcion);
              if(producto.descripcion != 'cocina'){
                let indice = pedido.productos.indexOf(producto);
                pedido.productos.splice(indice,1);
                
              }

             }
             console.log(pedido);
             
             this.pedidos.push(pedido);

          }

        }

      });


  }

  ngOnInit() {
  }

  PrepararPlato(plato: any) {
    let idPlato = plato.id;
    this.userService.TraerPedido(idPlato)
      .then((data) => {
        console.log(data);
        this.userService.UpdatearEstadoPedido(idPlato, 'en preparacion')
          .then(() => {
            console.log('updateado el estado del pedido');
            this.platoPreparado = true;
          })
      });
  }

  EntregarPlato(plato: any) {
    let idPlato = plato.id;
    this.userService.TraerPedido(idPlato)
      .then((data) => {
        console.log(data);
        data.etapasRealizadas++;
        this.userService.UpdatearEtapasRealizadasPedido(idPlato, data.etapasRealizadas)
          .then(() => {

            this.userService.UpdatearEstadoPedido(idPlato,'entregado al mozo');
            console.log('updateadas las estapas realizadas ');
            this.platoFinalizado = true;
          })
      });
  }

}