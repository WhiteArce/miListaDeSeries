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



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ListaAnimesComponent,
    ListaSeriesComponent
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
