import { TemplateLiteral } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  constructor(
    private router: Router, 
    private usuarioService: UsuarioService
    ) { 
  }
 
  ngOnInit(){ 

    this.mostraTodosUsuarios()
  }

  mostraTodosUsuarios(){
    this.usuarioService.getAllUsuario().subscribe((resp: Usuario[])=>{
      this.listaUsuarios = resp
    })
  }
  
  
}
