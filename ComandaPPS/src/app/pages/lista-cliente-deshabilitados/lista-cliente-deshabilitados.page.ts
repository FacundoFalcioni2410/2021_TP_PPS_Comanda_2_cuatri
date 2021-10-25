import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-cliente-deshabilitados',
  templateUrl: './lista-cliente-deshabilitados.page.html',
  styleUrls: ['./lista-cliente-deshabilitados.page.scss'],
})
export class ListaClienteDeshabilitadosPage implements OnInit {

  clientes: any = []

  constructor(private auth: AuthService) {
    this.auth.TraerClientesDeshabilitados().subscribe(clientes => {
      this.clientes = clientes;
      console.log(this.clientes);
    })
  }

  ngOnInit() {
  }

  accionar(event, item){
    if(!event.target.checked)
    {
      console.log('fdasfs');
      item.habilitado = true;
      setTimeout(() =>{
        this.auth.UpdateEstadoCliente(item);
      },300);
    }
  }

}
