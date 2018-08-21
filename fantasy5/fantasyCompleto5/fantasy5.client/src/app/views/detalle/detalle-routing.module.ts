import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleComponent,
    data: {
      title: 'Datos del detalle'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule {}
