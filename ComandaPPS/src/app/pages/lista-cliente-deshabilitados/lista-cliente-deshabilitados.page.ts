import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MailService } from 'src/app/services/mail.service';
import { PushNotificationsService } from 'src/app/services/push-notifications.service';

@Component({
  selector: 'app-lista-cliente-deshabilitados',
  templateUrl: './lista-cliente-deshabilitados.page.html',
  styleUrls: ['./lista-cliente-deshabilitados.page.scss'],
})
export class ListaClienteDeshabilitadosPage implements OnInit {

  clientes: any = []

  constructor(private auth: AuthService, private pushNotification: PushNotificationsService, private mailS: MailService) {
    this.auth.TraerGenerico('clientes','habilitado',false).subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  ngOnInit() {
  }

  accionar(event, item){
    if(!event.target.checked)
    {
      item.habilitado = true;
      // this.mailS.enviarConfirmacionHabilitado(item);
      setTimeout(() =>{
        this.auth.UpdateEstadoCliente(item);
      },300);
    }
  }

}
