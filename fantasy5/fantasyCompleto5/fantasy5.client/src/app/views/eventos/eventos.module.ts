import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { EventosComponent } from './eventos.component';
import { EventosRoutingModule } from './eventos-routing.module';

@NgModule({
  imports: [
    EventosRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ EventosComponent ]
})
export class EventosModule { }
