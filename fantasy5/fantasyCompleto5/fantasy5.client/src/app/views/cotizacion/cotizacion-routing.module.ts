import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionComponent } from './cotizacion.component';

const routes: Routes = [
  {
    path: '',
    component: CotizacionComponent,
    data: {
      title: 'Datos de la Cotizacion'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionRoutingModule {}
