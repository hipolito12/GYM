import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { SigninComponent } from './Components/signin/signin.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { UbicacionesComponent } from './Components/ubicaciones/ubicaciones.component';
import { BlogComponent } from './Components/blog/blog.component';
import { UserComponent } from './Components/user/user.component';
import { AuthGuard } from './auth.guard';
import { PagosComponent } from './Components/pagos/pagos.component';
import { RutinasComponent } from './Components/rutinas/rutinas.component';
import { RutinasAddComponent } from './Components/rutinas-add/rutinas-add.component';
import { RolComponent } from './Components/rol/rol.component';
import { RolAddComponent } from './Components/rol-add/rol-add.component';
import { RutinasUpdateComponent } from './Components/rutinas-update/rutinas-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'ubicaciones', component: UbicacionesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'rutinas', component: RutinasComponent },
  { path: 'rutinasAdd', component: RutinasAddComponent },
  { path: 'roles', component: RolComponent },
  { path: 'rolesAdd', component: RolAddComponent },
  { path: 'rutinasUpdate/:id', component: RutinasUpdateComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
