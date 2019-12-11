import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { ListaAnimesComponent } from './lista-animes/lista-animes.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { ProgramaDescripcionComponent } from './programa-descripcion/programa-descripcion.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { ListaFinalizadaComponent } from './lista-finalizada/lista-finalizada.component';
import { AgregarSerAnimComponent } from './agregar-ser-anim/agregar-ser-anim.component';
import { AgregarCapituloComponent } from './agregar-capitulo/agregar-capitulo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BarraMenuComponent,
    SignOnComponent,
    ListaAnimesComponent,
    ListaSeriesComponent,
    ProgramaDescripcionComponent,
    ListaEsperaComponent,
    ListaFinalizadaComponent,
    AgregarSerAnimComponent,
    AgregarCapituloComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
