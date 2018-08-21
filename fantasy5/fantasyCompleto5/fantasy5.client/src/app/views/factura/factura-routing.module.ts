import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaComponent } from './factura.component';

const routes: Routes = [
  {
    path: '',
    component: FacturaComponent,
    data: {
      title: 'FACTURACION'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule {}
