import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListaAnimesComponent } from '../lista-animes/lista-animes.component';
import { ListaSeriesComponent } from '../lista-series/lista-series.component';


const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'animes', component: ListaAnimesComponent },
    { path: 'series', component: ListaSeriesComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }