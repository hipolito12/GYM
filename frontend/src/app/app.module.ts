import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagosComponent } from './Components/pagos/pagos.component';
import { RutinasComponent } from './Components/rutinas/rutinas.component';
import { RutinasAddComponent } from './Components/rutinas-add/rutinas-add.component';
import { RolComponent } from './Components/rol/rol.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { RolAddComponent } from './Components/rol-add/rol-add.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RutinasUpdateComponent } from './Components/rutinas-update/rutinas-update.component';
import { RolUpdateComponent } from './Components/rol-update/rol-update.component';
import { RutinasPersoComponent } from './Components/rutinas-perso/rutinas-perso.component';
import { RutinasPersoAddComponent } from './Components/rutinas-perso-add/rutinas-perso-add.component';
import { RutinasPersoUpdateComponent } from './Components/rutinas-perso-update/rutinas-perso-update.component';
import { ActividadComponent } from './Components/actividad/actividad.component';
import { ActividadAddComponent } from './Components/actividad-add/actividad-add.component';
import { ActividadUpdateComponent } from './Components/actividad-update/actividad-update.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NgxPaginationModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatSelectModule,
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
