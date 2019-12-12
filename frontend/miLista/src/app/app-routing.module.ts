import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListaAnimesComponent } from './lista-animes/lista-animes.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { HomeComponent } from './home/home.component';
import { AgregarSerAnimComponent } from './agregar-ser-anim/agregar-ser-anim.component';
import { AgregarCapituloComponent } from './agregar-capitulo/agregar-capitulo.component';
import { ProgramaDescripcionComponent } from './programa-descripcion/programa-descripcion.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'animes', component: ListaAnimesComponent },
  { path: 'series', component: ListaSeriesComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'agregar-anime', component: AgregarSerAnimComponent },
  { path: 'agregar-capitulo', component: AgregarCapituloComponent },
  { path: 'programa-descripcion', component: ProgramaDescripcionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
