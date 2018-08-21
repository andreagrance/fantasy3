import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { DetalleComponent } from './detalle.component';
import { DetalleRoutingModule } from './detalle-routing.module';

@NgModule({
  imports: [
    DetalleRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ DetalleComponent ]
})
export class DetalleModule { }
