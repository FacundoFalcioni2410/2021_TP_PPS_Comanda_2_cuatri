import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QRService } from 'src/app/services/qr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-local',
  templateUrl: './ingreso-local.page.html',
  styleUrls: ['./ingreso-local.page.scss'],
})
export class IngresoLocalPage implements OnInit {

  listaEspera : boolean = false;

  constructor(private qrS: QRService, private userService : AuthService) { }

  ngOnInit() {
  }


  EntrarEnListaEspera(){
    this.listaEspera = true;
    this.userService.usuarioActual.listaEspera = true;
    this.userService.updateListaEsperaCliente(this.userService.usuarioActual?.id);
  }

  Scan(){
    
      Swal.fire({
        title: 'Escaneo',
        backdrop: false,
        text: 'Escanee el código QR para ingresar a la lista',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonText: 'Escanear',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      }).then(async (result) => {
        
        if (result.isConfirmed) {
          let datos = await this.qrS.scan();

          if(datos.text){
            if(datos.text =="ingresoListaDeEspera"){
              this.EntrarEnListaEspera();
            }
          }
            
          }
        
      });
    
  }
}
