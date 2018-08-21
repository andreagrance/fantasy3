import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { ReportesComponent } from './reportes.component';
import { ReportesRoutingModule } from './reportes-routing.module';

@NgModule({
  imports: [
    ReportesRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ReportesComponent ]
})
export class ReportesModule { }
