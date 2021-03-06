import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PushNotificationsService } from 'src/app/services/push-notifications.service';
import Swal from 'sweetalert2';

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

  constructor(private userService: AuthService, private pushNotification: PushNotificationsService) {

    this.userService.getPedidos()
      .subscribe((data: any) => {
        this.terminado = false;
        this.pedidos = [];
        for (let pedido of data) {
          if(pedido.estado == 'aceptado' && pedido.cocteleriaEntregado === false){

            this.productosFiltrados = pedido.productos.filter((producto)=>{
              return producto.descripcion == 'coctel';
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
              pedido.tiempoCoctel = max;

               this.pedidos.push(pedido); 
             }
          }
        }
      });
  }

  ngOnInit() {
  }

  PrepararCoctel(coctel: any) {
    coctel.timer = true;
  }

  EntregarCoctel(coctel: any) {
    let idCoctel = coctel.id;
    this.userService.TraerPedido(idCoctel)
      .subscribe((data) => {
        if(data.cocteleriaEntregado === false)
        {
          data.etapasRealizadas++;
          this.userService.UpdatearEtapasRealizadasPedido(idCoctel, data.etapasRealizadas)
          .then(() =>{
            Swal.fire({
              title: 'Exito',
              icon: 'success',
              text: 'Pedido devuelvo al mozo',
              backdrop: false,
              toast: true,
              position: 'bottom',
              timer: 2500,
              timerProgressBar: true,
            });
          });
        }
      });
  }

  recibirTimer(value, pedido){
    pedido.terminado = true;
  }
}
