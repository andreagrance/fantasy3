import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorComponent } from './proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedorComponent,
    data: {
      title: 'Datos del Proveedor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule {}
