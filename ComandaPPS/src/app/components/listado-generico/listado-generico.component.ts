import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.scss'],
})
export class ListadoGenericoComponent implements OnInit {

  @Input() personas : any;
  @Output() personaClickeadaEmitter : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}


  SeleccionarPersona(persona : any){
    this.personaClickeadaEmitter.emit(persona);
  }

}
