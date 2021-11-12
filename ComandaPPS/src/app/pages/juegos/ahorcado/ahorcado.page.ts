import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.page.html',
  styleUrls: ['./ahorcado.page.scss'],
})
export class AhorcadoPage implements OnInit {

  /* arrayPalabras : any = [];
  firstTime = true;
  imagenArray: string[] = [
    "assets/images/ahorcado/ahorcado-1.png",
    "assets/images/ahorcado/ahorcado-2.png",
    "assets/images/ahorcado/ahorcado-3.png",
    "assets/images/ahorcado/ahorcado-4.png",
    "assets/images/ahorcado/ahorcado-5.png",
    "assets/images/ahorcado/ahorcado-6.png",
    "assets/images/ahorcado/ahorcado-7.png",
    "assets/images/ahorcado/ahorcado-8.png",
  ]
  image: string = '';

  errores : number = 0;
  alertError : string = "";

  abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N','Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public arrayGuiones : string[]  = [];
  
  letra : string = "";
  palabra : string = ""; */

  numero: number;
  ganado = false;
  perdido = false;
  intentos = 3;

  descuento = 0;
  jugado = 0;

  constructor(private userService: AuthService) {
    this.numero = 0;

  }

  ngOnInit(): void {

    this.obtenerRandom();

  }



  obtenerRandom() {
    this.numero = Math.round(Math.random() * 2);
    if (this.numero == 0) { this.numero++; }
  }

  sonar2(key: any) {

    /* Jugado 1 vez */

    if (this.jugado == 0) {
      if (this.intentos > 0) {
        this.intentos--;
        if (key == this.numero) {
          this.ganado = true;
          this.descuento = 10;
          localStorage.setItem("descuento", this.descuento.toString());
          this.jugado++;

          var ref = this.userService.TraerPedido(this.userService?.usuarioActual?.pedido).subscribe(res => {

            var pedido = res;

            var precio = pedido.precioTotal - pedido.precioTotal * 10 / 100;
            var des = localStorage.getItem("descuento");
            if (des == "10") {
              this.userService.UpdatearPrecioTotalPedido(pedido.id, precio);

              localStorage.removeItem("descuento");
              localStorage.setItem("10%",'10%');
            }

            ref.unsubscribe();

          });
        }
      }
      if (this.intentos == 0 && this.ganado == false) {
        this.perdido = true;
        this.jugado++;
      }
    } else { /* Sigue jugando */
      if (this.intentos > 0) {
        this.intentos--;
        if (key == this.numero) {
          this.ganado = true;
          this.jugado++;
        }
      }
      if (this.intentos == 0 && this.ganado == false) {
        this.perdido = true;
        this.jugado++;
      }
    }

    


  }

  Rejugar() {
    this.obtenerRandom();
    this.ganado = false;
    this.perdido = false;
    this.intentos = 3;
  }

}
