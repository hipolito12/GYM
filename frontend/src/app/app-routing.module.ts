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
import { RutinasComponent } from './Components/rutinas/rutinas.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'signin', component: SigninComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'ubicaciones', component: UbicacionesComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  {path: 'rutinas' , component: RutinasComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
