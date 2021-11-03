import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { QRService } from 'src/app/services/qr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta-del-pedido',
  templateUrl: './cuenta-del-pedido.page.html',
  styleUrls: ['./cuenta-del-pedido.page.scss'],
})
export class CuentaDelPedidoPage implements OnInit {

  pedido: any;
  mesa: any;
  descuento = 0;
  propina: number;
  pagado: boolean = false;
  scaneo: boolean = false;
  totalPagar;

  constructor(private userService: AuthService, private qrS: QRService, private router: Router) {
    this.userService.TraerPedido(this.userService?.usuarioActual?.pedido).subscribe(res =>{
      this.pedido = res;

      if(this.pedido.estado === 'finalizado')
      {
        Swal.fire({text: 'Su pago ha sido confirmado por el mozo, muchas gracias por visitarnos', toast: true, timer:3500, icon: 'success', timerProgressBar: true, position: 'bottom'})
        setTimeout(() =>{
          this.router.navigate(['ingreso-local']);
        },3500)
      }
    });
    this.userService.getMesas().subscribe(res =>{
      for(let mesa of res)
      {
        if(this.userService?.usuarioActual?.mesaAsignada === mesa.numero)
        {
          this.mesa = mesa;
        }
      }
    });
  }

  ngOnInit() {
  }

  async scanPropina(){
    let propina = await this.qrS.scan();

    if(propina.text)
    {
      if(propina.text === "20")
      {
        this.propina = this.pedido.precioTotal * 0.2;
        this.descuento = 20;
      }
      else if(propina.text === "15")
      {
        this.propina = this.pedido.precioTotal * 0.15;
        this.descuento = 15;
      }
      else if(propina.text === "10")
      {
        this.propina = this.pedido.precioTotal * 0.1;
        this.descuento = 10;
      }
      else if(propina.text === "5")
      {
        this.propina = this.pedido.precioTotal * 0.05;
        this.descuento = 5
      }
      else
      {
        this.propina = 0;
        this.descuento = 0;
      }
      this.totalPagar = this.pedido.precioTotal + this.propina;
      this.scaneo = true;
    }
  }

  pagar(){
    this.userService.UpdatearEstadoPedido(this.pedido.id, 'pagado');
    
    Swal.fire({text: 'Se ha realizado su pago, aguarde a que sea confirmado por el mozo', toast: true, timer:2500, icon: 'warning', timerProgressBar: true, position: 'bottom'})
    this.pagado = true;

    this.userService.usuarioActual.mesaAsignada = 0;
    this.userService.usuarioActual.pedido = '';
    this.userService.usuarioActual.listaEspera = false;
    this.userService.updateClienteActual(this.userService.usuarioActual);
    this.userService.UpdatearMesaCliente(this.mesa, false);
  }

}
