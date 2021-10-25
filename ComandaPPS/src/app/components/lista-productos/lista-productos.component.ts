import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent implements OnInit {

  productos : any;
  constructor(private authService : AuthService) { 
    authService.getProductos()
    .subscribe((data)=>{
      this.productos = data;
    })
  }

  ngOnInit() {}

}
