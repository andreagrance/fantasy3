import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { AlquilerComponent } from './alquiler.component';
import { AlquilerRoutingModule } from './alquiler-routing.module';

@NgModule({
  imports: [
    AlquilerRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ AlquilerComponent ]
})
export class AlquilerModule { }
