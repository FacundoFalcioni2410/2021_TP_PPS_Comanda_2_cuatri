import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.page.html',
  styleUrls: ['./ahorcado.page.scss'],
})
export class AhorcadoPage implements OnInit {

  arrayPalabras : any = [];
  firstTime = true;
  imagenArray: string[] = [
    "assets/images/ahorcado/ahorcado-1.png",
    "assets/images/ahorcado/ahorcado-2.png",
    "assets/images/ahorcado/ahorcado-3.png",
    "assets/images/ahorcado/ahorcado-4.png",
    "assets/images/ahorcado/ahorcado-5.png",
    "assets/images/ahorcado/ahorcado-6.png",
    "assets/images/ahorcado/ahorcado-7.png",
    "assets/images/ahorcado/ahorcado-8.png",
  ]
  image: string = '';

  errores : number = 0;
  alertError : string = "";

  abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N','Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public arrayGuiones : string[]  = [];
  
  letra : string = "";
  palabra : string = "";

  constructor(private auth : AuthService) {
   this.image = this.imagenArray[0];
   this.auth.getProductos()
   .subscribe((data : any)=>{
    this.arrayPalabras = data;
    this.SetearPalabra();
    this.firstTime = false;
   });
   
  }

  ngOnInit(): void {

    // this.SetearPalabra();

  }

  getIndicesOf(searchStr: string, str: string, caseSensitive: boolean) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices:any = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
  }

  obtenerRandom(){ 
    return Math.round(Math.random()*(this.arrayPalabras.length - 0));
  }

  cambiarLetra(letra : string){
    let indiceACambiar = this.getIndicesOf(letra,this.palabra,false);

    if(indiceACambiar.length){

      for(let indice of indiceACambiar){
        this.arrayGuiones[indice] = letra;
      }
    }else{
      this.errores++;
      if(this.errores < 8)
      {
        this.image = this.imagenArray[this.errores];
      }
    }

  }

  SetearPalabra(){
    this.errores = 0;
    this.image = this.imagenArray[0];
    this.arrayGuiones = [];
    let random = this.obtenerRandom();
    this.palabra = this.arrayPalabras[random]?.nombre;
    // this.palabra = this.arrayPalabras[0]; 
    /*PROBLEMA ACÁ. NO PUEDE LEER LENGHT NI ASIGNARLE ALGUN INDEX QUE NO EXISTA,
    HAY QUE VERIFICAR QUE EXISTA EL INDICE YA QUE NO EXISTE AL MOMENTO DE HACER LE SUBSCRIBE, QUIZÁ ALGUN SET TIME OUT
     POR ESO AGREGUÉ UN INDICE 0 PARA PROBAR
    HABRÍA QUE HACER QUE EL RANDOM TIRE ALGUN NUMERO QUE SEA INDICE ASI LO AGARRA EL LENGHT
    */
    for(let i = 0; i < this.palabra.length; i++) {
      
      this.arrayGuiones.push("_");

    }
  }


}
