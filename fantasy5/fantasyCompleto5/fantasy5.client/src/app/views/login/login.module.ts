import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import {  ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    LoginRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
