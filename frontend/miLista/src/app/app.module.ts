import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
// import { SignOnComponent } from './sign-on/sign-on.component';
// import { ListaAnimesComponent } from './lista-animes/lista-animes.component';
// import { ListaSeriesComponent } from './lista-series/lista-series.component';
// import { ProgramaDescripcionComponent } from './programa-descripcion/programa-descripcion.component';
// import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
// import { ListaFinalizadaComponent } from './lista-finalizada/lista-finalizada.component';

// import { HttpClientModule } from '@angular/common/http';
// import { Router, Routes, RouterModule } from '@angular/router';
// import { ProfileComponent } from './profile/profile.component';
// import { AuthGuardService } from './auth-guard.service';
// import { AuthenticationService } from './authentication.service';




@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
