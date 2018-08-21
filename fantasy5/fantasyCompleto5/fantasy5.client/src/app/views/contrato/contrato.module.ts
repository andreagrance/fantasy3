import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { ContratoComponent } from './contrato.component';
import { ContratoRoutingModule } from './contrato-routing.module';

@NgModule({
  imports: [
    ContratoRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ContratoComponent ]
})
export class ContratoModule { }
