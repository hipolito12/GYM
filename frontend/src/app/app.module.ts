import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SigninComponent } from './Components/signin/signin.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { UbicacionesComponent } from './Components/ubicaciones/ubicaciones.component';
import { BlogComponent } from './Components/blog/blog.component';
import { UserComponent } from './Components/user/user.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagosComponent } from './Components/pagos/pagos.component';
import { RutinasComponent } from './Components/rutinas/rutinas.component';
import { AuthGuard } from './Guards/auth.guard';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { DatosPerfilComponent } from './Components/actualizar-datos-usuario/datos-perfil.component';
import{MatTableModule} from '@angular/material/table';
import{MatSortModule} from '@angular/material/sort';
import{MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination'
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MisRutinasComponent } from './Components/mis-rutinas/mis-rutinas.component';
import { IMCComponent } from './Components/imc/imc.component';
import {MatSelectModule} from '@angular/material/select';
import { ProfesoresComponent } from './Components/profesores/profesores.component';
import { VentasComponent } from './Components/ventas/ventas.component';
import { UsuarioBanComponent } from './Components/usuario-ban/usuario-ban.component';
import { BlogCRUDComponent } from './Components/blog-crud/blog-crud.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { BlogControlsComponent } from './Components/blog-controls/blog-controls.component';
import { ActividadDocenteComponent } from './Components/actividad-docente/actividad-docente.component';
import { TipoBlogComponent } from './Components/tipo-blog/tipo-blog.component';
import { CookieService } from 'ngx-cookie-service';
import { ActualizarDatosComponent } from './Components/actualizar-datos/actualizar-datos.component';
import { ActualizarDatosPorfesoresComponent } from './Components/actualizar-datos-porfesores/actualizar-datos-porfesores.component';

import { RutinasAddComponent } from './Components/rutinas-add/rutinas-add.component';
import { RolComponent } from './Components/rol/rol.component';

import { RolAddComponent } from './Components/rol-add/rol-add.component';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RutinasUpdateComponent } from './Components/rutinas-update/rutinas-update.component';
import { RolUpdateComponent } from './Components/rol-update/rol-update.component';
import { RutinasPersoComponent } from './Components/rutinas-perso/rutinas-perso.component';
import { RutinasPersoAddComponent } from './Components/rutinas-perso-add/rutinas-perso-add.component';
import { RutinasPersoUpdateComponent } from './Components/rutinas-perso-update/rutinas-perso-update.component';
import { ActividadComponent } from './Components/actividad/actividad.component';
import { ActividadAddComponent } from './Components/actividad-add/actividad-add.component';
import { ActividadUpdateComponent } from './Components/actividad-update/actividad-update.component';
import { AdministradorComponent } from './Components/administrador/administrador.component';
import { InformeComponent } from './Components/informe/informe.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateCuotaComponent } from './Components/update-cuota/update-cuota.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { TipoRutinaComponent } from './Components/tipo-rutina/tipo-rutina.component';
import { GestionDeEmpleadosComponent } from './Components/gestion-de-empleados/gestion-de-empleados.component';



import { personaacargoactividadComponent } from './Components/personaacargoactividad/personaacargoactividad.component';
import { personaacargoactividadAddEditComponent } from './Components/personaacargoactividad-add-edit/personaacargoactividad-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    NosotrosComponent,
    UbicacionesComponent,
    BlogComponent,
    UserComponent,
    NavbarComponent,
    PagosComponent,
    RutinasComponent,
    DatosPerfilComponent,
    MisRutinasComponent,
    IMCComponent,
    ProfesoresComponent,
    VentasComponent,
    UsuarioBanComponent,
    BlogCRUDComponent,
    BlogControlsComponent,
    ActividadDocenteComponent,
    TipoBlogComponent,
    ActualizarDatosComponent,
    ActualizarDatosPorfesoresComponent,   
     RutinasAddComponent,
    RolComponent,
    RolAddComponent,
    RutinasUpdateComponent,
    RolUpdateComponent,
    RutinasPersoComponent,
    RutinasPersoAddComponent,
    RutinasPersoUpdateComponent,
    ActividadComponent,
    ActividadAddComponent,
    ActividadUpdateComponent,
    personaacargoactividadComponent,
    personaacargoactividadAddEditComponent    ,AdministradorComponent,
    InformeComponent,
    UpdateCuotaComponent,
    UsuariosComponent,
    EmpleadosComponent,
    TipoRutinaComponent,
    GestionDeEmpleadosComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    CKEditorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    
  ],

  providers: 
  [
    AuthGuard,
  
    {
      provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },

  CookieService


],
  bootstrap: [AppComponent]

})
export class AppModule {}
