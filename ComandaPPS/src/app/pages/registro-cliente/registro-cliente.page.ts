import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {

  controles !: FormGroup;

  constructor(private form : FormBuilder, private authService : AuthService) { 
    this.controles = this.form.group({
      'nombre':['', [Validators.required]],
      'apellido':['', [Validators.required]],
      'dni':['', [Validators.required]],
      'foto':['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(8)]],
      'email': ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
   
  }

  getNombre(){
    return this.controles.get('nombre')?.value;
  }
  
  getApellido(){
    return this.controles.get('apellido')?.value;
  }
  
  getDni(){
    return this.controles.get('dni')?.value;
  }
  
  getFoto(){
    return this.controles.get('foto')?.value;
  }
  getEmail(){
    return this.controles.get('email')?.value;
  }
  getPassword(){
    return this.controles.get('password')?.value;
  }

  RegistrarCliente(){

    let cliente : Cliente = {
      nombre: this.getNombre(),
      apellido: this.getApellido(),
      dni: this.getDni(),
      foto: this.getFoto(),
      email : this.getEmail(),
      password: this.getPassword()
    }

    this.authService.registro(cliente);

  }

}
