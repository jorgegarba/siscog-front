import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import { ProyectoIndexComponent } from './components/proyecto/proyecto-index/proyecto-index.component';
import { ProyectoGastosComponent } from './components/proyecto/proyecto-gastos/proyecto-gastos.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'proyecto/index',component: ProyectoIndexComponent},
  {path: 'proyecto/gastos',component: ProyectoGastosComponent},
  {path: '**',component: HomeComponent},
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }