import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.page.html',
  styleUrls: ['./supervisor.page.scss'],
})
export class SupervisorPage implements OnInit {

  clientes : any[];
  empleados : any[];
  totalPersonas : any[];
  personaClickeada : any;
  clickeado : boolean = false;

  constructor(private userService : AuthService) { 

    this.userService.clientes.subscribe((data : any)=>{
      console.log(data);
      this.clientes = data;

      this.userService.empleados.subscribe((data :any)=>{
        console.log(data);
        this.empleados = data;
        this.totalPersonas = this.clientes.concat(this.empleados);
      });
      

    });

    
  }

  ngOnInit() {
  }


  PersonaClickeada(event :any){
    this.personaClickeada = event;
    this.clickeado = true;
  }

  change(value){
    console.log(value.detail.value);
  }
}
