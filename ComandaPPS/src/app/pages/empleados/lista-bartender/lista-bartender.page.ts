import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-bartender',
  templateUrl: './lista-bartender.page.html',
  styleUrls: ['./lista-bartender.page.scss'],
})
export class ListaBartenderPage implements OnInit {

  productos: any[] = [];
  pedidos: any[] = [];
  pedidoContenedor: any;
  terminado: boolean = false;
  coctelPreparado : boolean = false;
  coctelFinalizado : boolean = false;

  productosFiltrados : any[] = [];

  constructor(private userService: AuthService) {

    this.userService.getPedidos()
      .subscribe((data: any) => {
        this.terminado = false;
        this.pedidos = [];
        for (let pedido of data) {
          if(pedido.estado == 'aceptado' || pedido.estado == 'en preparacion'){

            this.productosFiltrados = pedido.productos.filter((producto)=>{
              return producto.descripcion == 'coctel';
            });

            pedido.productos = this.productosFiltrados;
            
             if(pedido.productos.length != 0){
         
               this.pedidos.push(pedido);
               
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
            this.coctelPreparado = true;
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

            this.userService.UpdatearEstadoPedido(idCoctel,'entregado al mozo');
            console.log('updateadas las estapas realizadas ');
            this.coctelFinalizado = true;
          })
      });
  }
}
