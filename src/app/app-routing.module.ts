import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

 

import { ClientesComponent } from 'src/app/component/clientes/clientes.component';

import { MecanicosComponent } from './component/mecanicos/mecanicos.component';

import { VehiculosComponent } from './component/vehiculos/vehiculos.component';

 

 

const routes: Routes = [

 

  { path: 'clientes', component: ClientesComponent },

  { path: 'mecanicos', component: MecanicosComponent },

  { path: 'vehiculos', component: VehiculosComponent },

];

 

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }

 

