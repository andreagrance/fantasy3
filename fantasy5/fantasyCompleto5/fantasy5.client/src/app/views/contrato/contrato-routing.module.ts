import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratoComponent } from './contrato.component';

const routes: Routes = [
  {
    path: '',
    component: ContratoComponent,
    data: {
      title: 'Datos del Contrato'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoRoutingModule {}
