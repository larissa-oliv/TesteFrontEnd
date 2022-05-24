import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/model/usuario';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario!: number; 

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idUsuario = this.route.snapshot.params['id']
    this.usuarioPorId(this.idUsuario)
  }

  usuarioPorId(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })

  }

  atualizar() {
    this.usuarioService.putUsuario(this.usuario, this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      alert('Usuario atualizado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }
  

}

