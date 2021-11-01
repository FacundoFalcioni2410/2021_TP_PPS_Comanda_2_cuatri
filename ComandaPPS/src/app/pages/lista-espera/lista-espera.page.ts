import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PushNotificationsService } from 'src/app/services/push-notifications.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-espera',
  templateUrl: './lista-espera.page.html',
  styleUrls: ['./lista-espera.page.scss'],
})
export class ListaEsperaPage implements OnInit {

  listaDeEsperaArray : any;
  mesasArray : any;
  aceptado : boolean = false;
  controles !: FormGroup;

  constructor(private authService : AuthService, private fb : FormBuilder, private pushNotification: PushNotificationsService) {

    this.authService.TraerGenerico('clientes','listaEspera',true)
    .subscribe((data)=>{
      console.log(data);
      this.listaDeEsperaArray = data;
    });

    this.authService.getMesas()
    .subscribe((data)=>{

      this.mesasArray = data;

    });

    this.controles = this.fb.group({
      mesa:['',Validators.required]
    });

  }

  ngOnInit() {
  }

  AsignarMesa(cliente : any){
    let mesaAsignada = parseInt(this.controles.get('mesa')?.value);

    

    this.authService.SetearMesaCliente(cliente,mesaAsignada)
    .then(()=>{
      Swal.fire({
        title: 'Exito',
        icon:'success',
        text:'Mesa asignada con éxito.',
        backdrop: false
      });


    });

  }

  Refrescar(){
    
  }
}
