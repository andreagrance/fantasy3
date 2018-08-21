import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquilerComponent } from './alquiler.component';

const routes: Routes = [
  {
    path: '',
    component: AlquilerComponent,
    data: {
      title: 'Datos del Alquiler'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerRoutingModule {}
