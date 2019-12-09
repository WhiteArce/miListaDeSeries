import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { ListaAnimesComponent } from './lista-animes/lista-animes.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { ListaFinalizadaComponent } from './lista-finalizada/lista-finalizada.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { ProgramaDescripcionComponent } from './programa-descripcion/programa-descripcion.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'barra-menu',
    component: BarraMenuComponent
  },
  {
    path: 'lista-anime',
    component: ListaAnimesComponent
  },
  {
    path: 'lista-espera',
    component: ListaEsperaComponent
  },
  {
    path: 'lista-finalizada',
    component: ListaFinalizadaComponent
  },
  {
    path: 'lista-series',
    component: ListaSeriesComponent
  },
  {
    path: 'programa-descripcion',
    component: ProgramaDescripcionComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
