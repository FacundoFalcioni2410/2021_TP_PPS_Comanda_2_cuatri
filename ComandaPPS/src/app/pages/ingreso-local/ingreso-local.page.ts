import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-local',
  templateUrl: './ingreso-local.page.html',
  styleUrls: ['./ingreso-local.page.scss'],
})
export class IngresoLocalPage implements OnInit {

  listaEspera : boolean = false;

  constructor() { }

  ngOnInit() {
  }


  EntrarEnListaEspera(){
    this.listaEspera = true;
  }

}
