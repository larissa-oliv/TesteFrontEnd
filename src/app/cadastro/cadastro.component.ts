import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/model/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(private router: Router, 
    private usuarioService: UsuarioService) { 
    
  }

  ngOnInit(){

  }

  cadastrar(){
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
      alert('Usuário cadastrado com sucesso!')
      this.usuario = new Usuario()
      this.router.navigate (['/usuario'])
    })
  }


}
 