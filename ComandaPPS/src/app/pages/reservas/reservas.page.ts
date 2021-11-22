import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PushNotificationsService } from 'src/app/services/push-notifications.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  mesasArray: any;

  spinner = false;
  fecha_error = false;
  hora_error = false;

  usuario: any;

  reservaForm = new FormGroup({
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    mesa: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService, private fb: FormBuilder, private pushNotification: PushNotificationsService, private router: Router) {



  }

  ngOnInit() {

    this.authService.getUserObs()
      .subscribe(val => {

        this.usuario = val;

        this.authService.getMesasObs()
          .subscribe((data) => {
            this.mesasArray = data;
          });

      });
    console.clear();
    this.reservaForm.reset();
  }

  async Reservar(FormValue: any) {

    var fecha: Date;
    fecha = new Date();

    var day = fecha.getDate(); // - I must to validate it
    var month = fecha.getMonth() + 1; // 1 - 2 - 3 - 4 etc
    var year = fecha.getFullYear(); // ok
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var time = fecha.getHours() + ":" + fecha.getMinutes();
    var now = new Date(year, month, day).getTime();
    var aux = FormValue.fecha.split("-");

    var aux_hora = FormValue.hora.split(":");

    var fecha2 = new Date(aux[0], aux[1], aux[2]).getTime(); // Fecha futura elegida

    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2020);

    if (this.reservaForm.valid) {
      var diff = fecha2 - now;

      if (diff < 0) { //Fecha pasada
        this.fecha_error = true;
      } else if (diff == 0) {
        this.fecha_error = false;
        /* Mismo dia */
        /* Chequeo horario */



        var dif_h = aux_hora[0] - horas;
        var dif_mins = aux_hora[1] - minutos; // eligido - actual

        /* Si la hora es la misma, chequeo minutos para que sea más de 40 minutos */
        if (dif_h == 0) {
          this.hora_error = false;

          if (dif_mins <= 40) {
            Swal.fire({ text: 'Hay que venir como mínimo 40 minutos antes de la reserva. Ponga un TIEMPO MAYOR para venir antes', toast: true, timer: 10000, icon: 'warning', timerProgressBar: true, position: 'bottom' });
          } else if (dif_mins > 40) {
            /* Si los minutos son correctos (más de 40), hago la reserva */

            this.ReservarMesa(this.usuario, FormValue); // Funcion

          }

        } else if (dif_h > 0) {
          this.hora_error = false;

          // SI LA DIFERENCIA ES 1 HORA DE DIFERENCIA. O SEA SE ELIJE SOLO UNA HORA EN EL FUTURO
          if (dif_h == 1) {
            /* Hay caso en el que el cliente puede elegir por ejemplo 02:00 siendo la hora 01:55. Hay que prevenir eso */
            /* Acá uso una lógica mia: hago 60 minutos - (minutos_futuros - minutos_actuales) */
            var result = 60 - (minutos - aux_hora[1]);

            if (result <= 40) {
              Swal.fire({ text: 'Hay que venir como mínimo 40 minutos antes de la reserva. Ponga un TIEMPO MAYOR para venir antes', toast: true, timer: 10000, icon: 'warning', timerProgressBar: true, position: 'bottom' });
            } else {
              /* Si los minutos son correctos (más de 40), hago la reserva */

              this.ReservarMesa(this.usuario, FormValue); // Funcion

            }

            /* ACÁ YA NO CHEQUEO MINUTOS YA QUE SE ELIJE MÁS DE 1 HORA EN EL FUTURO */
          } else if (dif_h > 1) {
            this.ReservarMesa(this.usuario, FormValue); // Funcion
          }

        } else {
          Swal.fire({ text: 'No se puede realizar reserva. No ingresar datos en pasado.', toast: true, timer: 3000, icon: 'warning', timerProgressBar: false, position: 'center' });
        }

      } else if (diff > 0) {
        /* Fecha futura, no chequeo horario y reservo la mesa */
        this.ReservarMesa(this.usuario, FormValue); // Funcion
      }

    }

  }

  ReservarMesa(cliente: any, valor: any) {

    /* Seteo al cliente actual */
    this.authService.usuarioActual = cliente;

    let mesaAsignada = valor.mesa;
    let mesaObj: any;

    for (let mesa of this.mesasArray) {
      if (mesa.numero == mesaAsignada) {
        mesaObj = mesa;
        break;
      }
    }

    this.authService.SetearMesaCliente(cliente, mesaAsignada)
      .then(() => {
        this.authService.UpdatearMesaCliente(mesaObj, true)
          .then(() => {
            this.authService.SetearMesaClienteReserva(cliente, true, valor.fecha, valor.hora)
              .then(() => {
                Swal.fire({
                  title: 'Exito',
                  icon: 'success',
                  text: 'Mesa reservada con éxito pero la reserva tiene que ser aprobada por la Administración.',
                  backdrop: false,
                  timer: 4000
                });
                this.router.navigate(['/ingreso-local']);
              });
          });
      });
  }

  get formControls() {
    return this.reservaForm['controls'];
  }

}
