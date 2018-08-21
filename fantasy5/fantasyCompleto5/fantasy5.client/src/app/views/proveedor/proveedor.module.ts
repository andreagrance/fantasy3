import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CommonModule} from '@angular/common'
import { ProveedorComponent } from './proveedor.component';
import { ProveedorRoutingModule } from './proveedor-routing.module';
import {  ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ProveedorRoutingModule,
    ChartsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ ProveedorComponent ]
})
export class ProveedorModule { }
