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
import { AuthGuard } from './Guards/auth.guard';
import { PagosComponent } from './Components/pagos/pagos.component';
import { RutinasComponent } from './Components/rutinas/rutinas.component';
import { DatosPerfilComponent } from './Components/actualizar-datos-usuario/datos-perfil.component';
import { MisRutinasComponent } from './Components/mis-rutinas/mis-rutinas.component';
import { IMCComponent } from './Components/imc/imc.component';
import { ProfesoresComponent } from './Components/profesores/profesores.component';
import { VentasComponent } from './Components/ventas/ventas.component';
import { UsuarioBanComponent } from './Components/usuario-ban/usuario-ban.component';
import { BlogCRUDComponent } from './Components/blog-crud/blog-crud.component';
import { ActividadDocenteComponent } from './Components/actividad-docente/actividad-docente.component';
import { TipoBlogComponent } from './Components/tipo-blog/tipo-blog.component';
import { ActualizarDatosPorfesoresComponent } from './Components/actualizar-datos-porfesores/actualizar-datos-porfesores.component';
import { ActividadAddComponent } from './Components/actividad-add/actividad-add.component';
import { ActividadUpdateComponent } from './Components/actividad-update/actividad-update.component';
import { ActividadComponent } from './Components/actividad/actividad.component';
import { RolAddComponent } from './Components/rol-add/rol-add.component';
import { RolUpdateComponent } from './Components/rol-update/rol-update.component';
import { RolComponent } from './Components/rol/rol.component';
import { RutinasAddComponent } from './Components/rutinas-add/rutinas-add.component';
import { RutinasPersoAddComponent } from './Components/rutinas-perso-add/rutinas-perso-add.component';
import { RutinasPersoUpdateComponent } from './Components/rutinas-perso-update/rutinas-perso-update.component';
import { RutinasPersoComponent } from './Components/rutinas-perso/rutinas-perso.component';
import { RutinasUpdateComponent } from './Components/rutinas-update/rutinas-update.component';
import { ProfesoresGuardGuard } from './Guards/profesores-guard.guard';
import { AdministradorComponent } from './Components/administrador/administrador.component';
import { AdminGuard } from './Guards/admin.guard';
import { UsuarioAdminGuard } from './Guards/usuario-admin.guard';
import { ProfesAdminGuard } from './Guards/profes-admin.guard';
import { InformeComponent } from './Components/informe/informe.component';
const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: '', redirectTo: 'home' ,pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'signin', component: SigninComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'ubicaciones', component: UbicacionesComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'pagos' , component: PagosComponent,canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  {path: 'rutinas' , component: RutinasComponent,canActivate: [AuthGuard]},
  {path: 'datos-perfil' , component: DatosPerfilComponent},
  {path:'misRutinas',component:MisRutinasComponent,canActivate: [AuthGuard]},
  {path:'imc',component:IMCComponent,canActivate:[UsuarioAdminGuard]},
  {path:'profesores',component:ProfesoresComponent,canActivate:[ ProfesoresGuardGuard]},
  {path: 'ventas', component: VentasComponent, canActivate:[ ProfesoresGuardGuard] },
  {path: 'BanUsuario', component: UsuarioBanComponent,canActivate:[ ProfesoresGuardGuard] },
  {path: 'blogCRUD', component: BlogCRUDComponent,canActivate:[ ProfesAdminGuard] },
  {path:'actividadDocente',component: ActividadDocenteComponent,canActivate:[ ProfesoresGuardGuard]},
  {path: "tipoBlog",component: TipoBlogComponent ,canActivate:[ ProfesAdminGuard]},
  {path: 'ActualizarDatosDocentes', component: ActualizarDatosPorfesoresComponent ,canActivate:[ ProfesoresGuardGuard]},
  { path: 'rutinasAdd', component: RutinasAddComponent ,canActivate:[ ProfesoresGuardGuard]},
  { path: 'roles', component: RolComponent ,canActivate:[AdminGuard]},
  { path: 'rolesAdd', component: RolAddComponent,canActivate:[AdminGuard] },  
  { path: 'rolesUpdate/:id', component: RolUpdateComponent,canActivate:[AdminGuard]},
  { path: 'rutinasUpdate/:id', component: RutinasUpdateComponent,canActivate:[ ProfesoresGuardGuard] },
  { path: 'rutinasPerso', component: RutinasPersoComponent,canActivate:[ ProfesoresGuardGuard] },
  { path: 'rutinasPersoAdd', component: RutinasPersoAddComponent,canActivate:[ ProfesoresGuardGuard] },
  { path: 'rutinasPersoUpdate/:id', component: RutinasPersoUpdateComponent,canActivate:[ ProfesoresGuardGuard] },
  { path: 'actividad', component: ActividadComponent,canActivate:[ProfesAdminGuard]},
  { path: 'actividadAdd', component: ActividadAddComponent,canActivate:[ProfesAdminGuard]},
  { path: 'actividadUpdate/:id', component: ActividadUpdateComponent,canActivate:[ProfesAdminGuard] },
  {path:'administrador',component:AdministradorComponent,canActivate:[AdminGuard]},
  {path:'informe',component:InformeComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
