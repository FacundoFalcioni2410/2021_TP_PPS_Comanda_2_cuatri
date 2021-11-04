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
  productosFiltrados : any[];

  constructor(private userService: AuthService) {

    this.userService.getPedidos()
      .subscribe((data: any) => {
        this.terminado = false;
        this.pedidos = [];
        for (let pedido of data) {
          if(pedido.estado == 'aceptado' && pedido.cocinaEntregado === false){

            this.productosFiltrados = pedido.productos.filter((producto)=>{
              return producto.descripcion == 'cocina';
            });

            let max = 0;



            pedido.productos = this.productosFiltrados;
            
             if(pedido.productos.length != 0){
              
              for(let p of pedido.productos)
              {
                let flag = false;
  
                if(!flag || p.tiempo > max)
                {
                  flag = true;
                  max = p.tiempo
                }
              }
  
              pedido.tiempoCocina = max;
               this.pedidos.push(pedido);
               
             }


          }

        }

      });


  }

  ngOnInit() {
  }

  PrepararPlato(plato: any) {
    plato.timer = true;
  }

  EntregarPlato(plato: any) {
    let idPlato = plato.id;
    this.userService.TraerPedido(idPlato)
      .subscribe((data) => {
        if(data.cocinaEntregado === false)
        {
          data.etapasRealizadas++;
          this.userService.UpdatearEtapasRealizadasPedidoCocina(idPlato, data.etapasRealizadas);
        }
      });
  }

  recibirTimer(value, pedido){
    pedido.terminado = true;
  }

}
