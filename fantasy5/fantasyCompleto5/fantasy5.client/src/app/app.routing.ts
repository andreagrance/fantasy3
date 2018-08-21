import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './providers/guard';
// Import Containers
import {
  FullLayout,
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './views/login/login.module#LoginModule',    
    data: {
      title: 'Iniciar Sesion'
    }
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'proveedor',
        loadChildren: './views/proveedor/proveedor.module#ProveedorModule'
      },
      {
        path: 'cotizacion',
        loadChildren: './views/cotizacion/cotizacion.module#CotizacionModule'
      },
      {
        path: 'catering',
        loadChildren: './views/catering/catering.module#CateringModule'
      },
      {
        path: 'clientes',
        loadChildren: './views/clientes/clientes.module#ClientesModule'
      },
      {
        path: 'contrato',
        loadChildren: './views/contrato/contrato.module#ContratoModule'
      },
      {
        path: 'factura', //ruta
        loadChildren: './views/factura/factura.module#FacturaModule'//archivo que se va a cargar
      },
      {
        path: 'detalle', //ruta
        loadChildren: './views/detalle/detalle.module#DetalleModule'//archivo que se va a cargar
      },
      {
        path: 'compras', //ruta
        loadChildren: './views/compras/compras.module#ComprasModule'//archivo que se va a cargar
      },
      {
        path: 'alquiler', //ruta
        loadChildren: './views/alquiler/alquiler.module#AlquilerModule'//archivo que se va a cargar
      },
      {
        path: 'reportes', //ruta
        loadChildren: './views/reportes/reportes.module#ReportesModule'//archivo que se va a cargar
      },
      {
        path: 'eventos',
        loadChildren: './views/eventos/eventos.module#EventosModule'
      }
    ],canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
