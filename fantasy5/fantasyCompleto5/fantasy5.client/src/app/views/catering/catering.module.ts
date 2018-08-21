import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { CateringComponent } from './catering.component';
import { CateringRoutingModule } from './catering-routing.module';

@NgModule({
  imports: [
    CateringRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ CateringComponent ]
})
export class CateringModule { }
