import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateringComponent } from './catering.component';

const routes: Routes = [
  {
    path: '',
    component: CateringComponent,
    data: {
      title: 'Datos del Catering'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CateringRoutingModule {}
