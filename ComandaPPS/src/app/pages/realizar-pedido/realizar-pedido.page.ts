import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { ModalController } from '@ionic/angular';
import { CarritoPage } from '../carrito/carrito.page';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AudioService } from 'src/app/services/audio.service';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.page.html',
  styleUrls: ['./realizar-pedido.page.scss'],
})
export class RealizarPedidoPage implements OnInit {

  component = SpinnerComponent;
  productos: any = [];
  cantidad: number = 0;
  cantidadMaxima: number = 0;
  usuario: any;

  constructor(private modalController: ModalController, private userService: AuthService, private vibration: Vibration, public audio : AudioService) {
    this.usuario = this.userService.usuarioActual;
    this.userService.TraerGenerico('mesas', 'numero', this.usuario.mesaAsignada).subscribe((res: any) =>{
      this.cantidadMaxima = res[0]?.cantidadComensales;
    });
  }

  ngOnInit() {
  }

  recibirProducto(producto: any){
    let index = 0;
    index = this.productos.indexOf(producto);
    if(index === -1)
    {
      producto.cantidad = 1;
      this.productos.push(producto);
    }
    else
    {
      for(let item of this.productos)
      {
        if(item === producto)
        {
          if(item.cantidad < this.cantidadMaxima)
          {
            item.cantidad++;
          }
          else
          {
            Haptics.vibrate({duration: 2000});
            Swal.fire({position: 'bottom', text:'Cantidad maxima del producto alcanzada', timer: 1500, timerProgressBar: true, icon: 'error', toast: true});
          }
        }
      }
    }
    this.cantidad = this.productos.length;
  }

  async verPedido(){
      const modal = await this.modalController.create({
        component: CarritoPage,
        cssClass: 'modal-fullscreen',
        componentProps: {
          'productos': this.productos,
          'maximo': this.cantidadMaxima
        }
      });
      await modal.present();
      await modal.onDidDismiss().then(res =>{
        this.productos = res.data.productos;
      })
  }

  resetearPedido(){
    this.productos = [];
  }
}
