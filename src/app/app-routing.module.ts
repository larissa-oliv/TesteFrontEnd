import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path:'', redirectTo: 'usuario', pathMatch:'full' },
  {path:'usuario', component:UsuarioComponent},
  {path:'cadastro', component:CadastroComponent},
  
  
  {path:'edit-usuario/:id', component: EditUsuarioComponent},
  {path:'delete-usuario/:id', component: DeleteUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
