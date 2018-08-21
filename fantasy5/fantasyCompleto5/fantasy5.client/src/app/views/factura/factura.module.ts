import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import {  FacturaComponent } from './factura.component';
import { FacturaRoutingModule } from './factura-routing.module';

@NgModule({
  imports: [
    FacturaRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ FacturaComponent ]
})
export class FacturaModule { }
