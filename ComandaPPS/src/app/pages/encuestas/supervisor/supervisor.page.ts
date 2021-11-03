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

   //
   myChart: any;
   ctx: any;
   ctx1: any;

   
  constructor(private userService : AuthService) { 

    this.userService.getClientes().subscribe((data : any)=>{
      console.log(data);
      this.clientes = data;

      this.userService.getEmpleados().subscribe((data :any)=>{
        console.log(data);
        this.empleados = data;
        this.totalPersonas = this.clientes.concat(this.empleados);
      });
      

    });

    
  }

  ngOnInit() {
  }

//   ionViewDidEnter(){
//     this.ctx = document.getElementById('myChart') as any;
//     this.ctx1 = this.ctx.getContext('2d');
//     this.ActualizarGrafico();
//   }

  PersonaClickeada(event :any){
    this.personaClickeada = event;
    this.clickeado = true;
  }

  change(value){
    console.log(value.detail.value);
  }

//   ActualizarGrafico(){

//     var myChart = new Chart(this.ctx, {
//       type: 'pie',
//       data: {
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });

//   }

//   graphClickEvent(event, array){
     
//     //console.log(array[0].index);
//    // console.log(arrayDatos[array[0].index]);
//     //let imagen = document.getElementById('imagen') as HTMLImageElement
//     //let card = document.getElementById('card') as HTMLElement;
//     //card.style.display = 'block';
//     //imagen.src = url[array[0].index];
//   }
}
