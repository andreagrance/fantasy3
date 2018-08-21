import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { CotizacionComponent } from './cotizacion.component';
import { CotizacionRoutingModule } from './cotizacion-routing.module';

@NgModule({
  imports: [
    CotizacionRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ CotizacionComponent ]
})
export class CotizacionModule { }
