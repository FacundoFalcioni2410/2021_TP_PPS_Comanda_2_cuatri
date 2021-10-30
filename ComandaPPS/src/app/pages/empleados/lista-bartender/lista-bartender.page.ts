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

  init() {
    document.querySelector(".start").addEventListener("click", this.cronometrar);
    document.querySelector(".stop").addEventListener("click", this.parar);
    document.querySelector(".reiniciar").addEventListener("click", this.reiniciar);
    this.h = 0;
    this.m = 0;
    this.s = 0;
    document.getElementById("hms").innerHTML = "00:00:00";
  }
  cronometrar() {
    this.escribir();
    this.id = setInterval(this.escribir, 1000);
    document.querySelector(".start").removeEventListener("click", this.cronometrar);
  }
  escribir() {
    var hAux, mAux, sAux;
    this.s++;
    if (this.s > 59) { this.m++; this.s = 0; }
    if (this.m > 59) {this.h++; this.m = 0; }
    if (this.h > 24) { this.h = 0; }

    if (this.s < 10) { sAux = "0" + this.s; } else { sAux = this.s; }
    if (this.m < 10) { mAux = "0" + this.m; } else { mAux = this.m; }
    if (this.h < 10) { hAux = "0" + this.h; } else { hAux = this.h; }

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux;
  }
  parar() {
    clearInterval(this.id);
    document.querySelector(".start").addEventListener("click", this.cronometrar);

  }
  reiniciar() {
    clearInterval(this.id);
    document.getElementById("hms").innerHTML = "00:00:00";
    this.h = 0; this.m = 0; this.s = 0;
    document.querySelector(".start").addEventListener("click", this.cronometrar);
  }
}
