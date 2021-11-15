import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-gestion-reservas',
  templateUrl: './gestion-reservas.page.html',
  styleUrls: ['./gestion-reservas.page.scss'],
})
export class GestionReservasPage implements OnInit {

  showSpinner: boolean = true;
  sinReservas = false;
  reservasArray : any;
  mesasArray : any;

  reservas = Array();

  constructor(private resServ: AuthService) {

    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);

    this.resServ.TraerGenerico("clientes","reserva",true).subscribe( res =>{
      var r: any = res;
      
      
      function SortArray(x, y){
          if ((x.fecha && x.hora) < (y.fecha && y.hora)) {return -1;}
          if ((x.fecha && x.hora) > (y.fecha && y.hora)) {return 1;}
          return 0;
      }
      this.reservasArray = r.sort(SortArray);
      
      this.resServ.TraerGenerico("mesas","cliente",true).subscribe(m =>{
        this.mesasArray = m;

        this.reservas = Array(); // To refresh

        for(let mesa of this.mesasArray){

          for(let reserva of this.reservasArray){

            let numMesa = Number.parseInt(reserva.mesaAsignada,10);
            if(mesa.numero == numMesa && reserva.reservaEstado == "pendiente"){
              
              var mesaObj = {
                nombre: reserva.nombre,
                apellido: reserva.apellido,
                mesaAsignada: reserva.mesaAsignada,
                cantidadComensales: mesa.cantidadComensales,
                mesaTipo: mesa.mesaTipo,
                fecha: reserva.fecha,
                hora: reserva.hora,
                foto: reserva.foto,
                objMesa: mesa,
                objCliente: reserva
              };

              this.reservas.push(mesaObj);

            }

          }
        }

        if(this.reservas.length == 0){
          this.sinReservas = true;
        } else {this.sinReservas = false;}

      });
      
    });

  }

  ngOnInit() {
  }

  GestionReserva(cliente:any,key:any){
    
    switch (key) {
      case 0:
        this.resServ.AceptarRechazarReserva(cliente.objCliente,"aceptado",cliente.objMesa);
        Swal.fire({text: 'Reserva aceptada', toast: true, timer:3500, icon: 'success', timerProgressBar: true, position: 'center'});
        break;
    
      case 1:
        this.resServ.AceptarRechazarReserva(cliente.objCliente,"rechazado",cliente.objMesa);
        Swal.fire({text: 'Reserva rechazada', toast: true, timer:3500, icon: 'warning', timerProgressBar: true, position: 'center'});
        break;
    }
  }

}
