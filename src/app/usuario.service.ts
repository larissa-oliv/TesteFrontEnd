import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from './usuario/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAllUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios')
  }

  getByIdUsuario(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:3000/usuarios/${id}`)
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario)
  }

  putUsuario(usuario: Usuario, id: number):Observable<Usuario>{
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/${id}`, usuario)
  }

  deleteUsuario(id: number){
    return this.http.delete(`http://localhost:3000/usuarios/${id}`)
  }


}
