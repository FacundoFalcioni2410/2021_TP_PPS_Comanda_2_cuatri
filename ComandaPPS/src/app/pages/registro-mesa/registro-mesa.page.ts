import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxQrcodeElementTypes } from 'ngx-qrcode2';
import { Mesa } from 'src/app/models/mesa';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-mesa',
  templateUrl: './registro-mesa.page.html',
  styleUrls: ['./registro-mesa.page.scss'],
})
export class RegistroMesaPage implements OnInit {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  createdCode : string = 'Techiediaries';
  controles !: FormGroup;

  constructor(private form : FormBuilder, private auth : AuthService) {

    this.controles = this.form.group({
      'numero':['', [Validators.required]],
      'cantidadComensales':['', [Validators.required]],
      'tipo':['', [Validators.required, Validators.minLength(3)]],
    });

  }

  ngOnInit() {
  }

  getNumero(){
    return this.controles.get('numero')?.value;
  }
  
  getCantidadComensales(){
    return this.controles.get('cantidadComensales')?.value;
  }
  getTipo(){
    return this.controles.get('tipo')?.value;
  }

  RegistrarMesa(){
    let mesa : Mesa = {
      numero : this.getNumero(),
      cantidadComensales : this.getCantidadComensales(),
      tipo : this.getTipo(),
      //foto: aca va la foto
    };

    this.auth.AltaMesa(mesa);
    this.controles.reset();
  }
}
