import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";
import { PagosComponent } from './Components/pagos/pagos.component';
import { RutinasComponent } from './Components/rutinas/rutinas.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { DatosPerfilComponent } from './Components/datos-perfil/datos-perfil.component';
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
    ActividadDocenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule ,
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
    CKEditorModule
    
  ],

  providers: [AuthGuard,
  {provide: HTTP_INTERCEPTORS,
  useClass:TokenInterceptorService,
multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
