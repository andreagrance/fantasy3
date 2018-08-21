import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { ComprasComponent } from './compras.component';
import { ComprasRoutingModule } from './compras-routing.module';

@NgModule({
  imports: [
    ComprasRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ComprasComponent ]
})
export class ComprasModule { }
