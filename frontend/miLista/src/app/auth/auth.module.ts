import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../services/auth.service';
import { ListaAnimesComponent } from '../lista-animes/lista-animes.component';
import { ListaSeriesComponent } from '../lista-series/lista-series.component';
import {AgregarSerAnimComponent} from '../agregar-ser-anim/agregar-ser-anim.component';
import { AgregarCapituloComponent } from '../agregar-capitulo/agregar-capitulo.component';



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ListaAnimesComponent,
    ListaSeriesComponent,
    AgregarSerAnimComponent,
    AgregarCapituloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
