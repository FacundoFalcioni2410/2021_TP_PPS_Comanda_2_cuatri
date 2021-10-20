import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2/src/sweetalert2.js'
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  form: FormGroup
  nombresFotos = []
  formDataFotos: FormData = null;

  //
  myChart: any;
  ctx: any;
  ctx1: any;
  

  constructor(private formBuilder: FormBuilder, private fotoS: FotosService, private vibration: Vibration) {
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      satisfaccion: ['5',[Validators.required]],
      productoConsumido: ['',[Validators.required]],
      trato: ['bien',[Validators.required]],
      visitar: ['false',[Validators.required]],
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.ctx = document.getElementById('myChart') as any;
    this.ctx1 = this.ctx.getContext('2d');
    this.ctx.fillStyle = 'black';
    this.ActualizarGrafico();
  }

  change(value){
    console.log(value.detail.value);
  }

  mostrarToast(options: any){
    Swal.fire(options);
  }

  archivoSeleccionado(event: any)
  {
    if (event.target.files.length > 0)
    {
      this.formDataFotos = new FormData();
      for (let i = 0; i < event.target.files.length; i++)
      {
        this.nombresFotos.push(event.target.files[i].name);
        this.formDataFotos.delete(`archivo${i}`);
        this.formDataFotos.append(`archivo${i}`, event.target.files[i], event.target.files[i].name);
      }
    }
    else
    {
      this.formDataFotos = null;
      this.vibration.vibrate(2000);
      this.mostrarToast({text: "Debe seleccionar 3 fotos", toast: true, position: 'bottom',timer: 2000,timerProgressBar: true, icon: 'error'});
    }
  }

  subirEncuesta(){
    this.fotoS.subirArchivos(this.formDataFotos, this.nombresFotos, this.form.value);
  }

  ActualizarGrafico(){

    var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 3
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  }

  graphClickEvent(event, array){
     
    //console.log(array[0].index);
   // console.log(arrayDatos[array[0].index]);
    //let imagen = document.getElementById('imagen') as HTMLImageElement
    //let card = document.getElementById('card') as HTMLElement;
    //card.style.display = 'block';
    //imagen.src = url[array[0].index];
  }

}
