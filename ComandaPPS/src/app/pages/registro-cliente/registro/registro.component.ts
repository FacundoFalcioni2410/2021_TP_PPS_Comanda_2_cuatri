import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  loading = false;
  seleccionado = false;
  tipo: string = '';
  
  constructor() { }

  ngOnInit() {}

  seleccionarTipo(tipo: string){
    this.seleccionado = true;
    this.tipo = tipo;
  }
}
