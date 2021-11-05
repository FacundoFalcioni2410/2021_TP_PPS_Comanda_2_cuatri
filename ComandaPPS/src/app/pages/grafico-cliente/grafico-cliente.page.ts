import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-grafico-cliente',
  templateUrl: './grafico-cliente.page.html',
  styleUrls: ['./grafico-cliente.page.scss'],
})
export class GraficoClientePage implements OnInit {

  encuestas: any;

  constructor(private userService: AuthService, public audioService : AudioService) {
    this.userService.getEncuestas().subscribe(res =>{
      this.encuestas = res;
      this.generateChart();
    });
  }

  chart: any = null;
  chartTerminado: boolean = false

  ngOnInit() {
  }

  generateChart(){
    let encuestas = this.encuestas.filter(item =>{
      return item?.satisfaccion ? item : null;
    });
    this.chart = {
      primero:{
        pieChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        pieChartData: [
          this.obtenerCantidad(encuestas,1,'satisfaccion'), 
          this.obtenerCantidad(encuestas,2,'satisfaccion'),
          this.obtenerCantidad(encuestas,3,'satisfaccion'),
          this.obtenerCantidad(encuestas,4,'satisfaccion'),
          this.obtenerCantidad(encuestas,5,'satisfaccion'),
          this.obtenerCantidad(encuestas,6,'satisfaccion'),
          this.obtenerCantidad(encuestas,7,'satisfaccion'),
          this.obtenerCantidad(encuestas,8,'satisfaccion'),
          this.obtenerCantidad(encuestas,9,'satisfaccion'),
          this.obtenerCantidad(encuestas,10,'satisfaccion'),
        ],
        pieChartType: 'pie',
      },
      segundo:{
        pieChartLabels: ['excelente', 'bien', 'pesimo'],
        pieChartData: [
          this.obtenerCantidad(encuestas,'excelente','trato'), 
          this.obtenerCantidad(encuestas,'bien','trato'),
          this.obtenerCantidad(encuestas,'pesimo','trato')
        ],
        pieChartType: 'pie',
      },
      tercero:{
        pieChartLabels: ['Si', 'no'],
        pieChartData: [
          this.obtenerCantidad(encuestas,true,'visitar'), 
          this.obtenerCantidad(encuestas,false,'visitar'),
        ],
        pieChartType: 'pie',
      },
      cuarto:{
        pieChartLabels: ['Cocteles', 'Postres', 'Ambos', 'Ninguno'],
        pieChartData: [
          this.obtenerCantidad(encuestas,'cocteles','productoConsumido'), 
          this.obtenerCantidad(encuestas,'postres','productoConsumido'),
          this.obtenerCantidad(encuestas,'ambos','productoConsumido'),
          this.obtenerCantidad(encuestas,'ninguno','productoConsumido'),
        ],
        pieChartType: 'pie',
      },
    }
    this.chartTerminado = true;
  }

  obtenerCantidad(encuesta, valor, clave){
    let filtrado = encuesta.filter((item: any)=>{
      return item[clave] == valor;
    });
    return filtrado.length;
  }
}