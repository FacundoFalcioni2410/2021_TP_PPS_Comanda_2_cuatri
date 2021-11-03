import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  items: any;
  mensaje: any;
  constructor(private chat: ChatService, public userService: AuthService) {

    this.items = this.chat.items;

  }

  ngOnInit() {
  }

  MandarMensaje() {
    if(this.mensaje.length)
    {
      let fecha = new Date();
      let day: any = fecha.getDate();
      let month: any = fecha.getMonth() + 1;
      let year: any = fecha.getFullYear();
      let hora: string = `${day}/${month}/${year}`;

      let mensajeObj: any = {
        message: this.mensaje,
        hour: hora,
        user: this.userService.usuarioActual,
        tipo: this.userService.tipoUsuario
      }

      if (this.userService.usuarioActual == 'cliente') {
        mensajeObj.mesa = this.userService.usuarioActual.mesaAsignada;
      }


      this.chat.MandarMensaje(mensajeObj);
      this.mensaje = '';
    }
  }
}