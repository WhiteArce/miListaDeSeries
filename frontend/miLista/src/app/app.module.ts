import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './services/auth.service';
import { ListaAnimesComponent } from './lista-animes/lista-animes.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { HomeComponent } from './home/home.component';
import { AgregarSerAnimComponent } from './agregar-ser-anim/agregar-ser-anim.component';
import { AgregarCapituloComponent } from './agregar-capitulo/agregar-capitulo.component';
import { ProgramaDescripcionComponent } from './programa-descripcion/programa-descripcion.component';
import { AuthGuard } from './auth.guard';
// import { BarraHomeComponent } from './barra-home/barra-home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarraComponent } from './barra/barra.component';
import { AnimesService } from "./services/animes.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListaAnimesComponent,
    ListaSeriesComponent,
    HomeComponent,
    AgregarSerAnimComponent,
    AgregarCapituloComponent,
    ProgramaDescripcionComponent,
    BarraComponent
    // BarraHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, AnimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
