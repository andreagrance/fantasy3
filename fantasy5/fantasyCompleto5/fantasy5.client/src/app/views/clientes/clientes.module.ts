import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  imports: [
    ClientesRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ClientesComponent ]
})
export class ClientesModule { }
