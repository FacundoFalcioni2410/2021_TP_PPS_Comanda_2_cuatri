import { Component } from '@angular/core';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { AuthService } from '../services/auth.service';
import { FotosService } from '../services/fotos.service';
import { MailService } from '../services/mail.service';
import { QRService } from '../services/qr.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotoS: FotosService, public qrS: QRService, public mailS: MailService, public auth: AuthService) {}
}
