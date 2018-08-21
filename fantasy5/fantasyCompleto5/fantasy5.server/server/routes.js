/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  
  app.use('/api/users', require('./api/user'));  
  app.use('/api/articulos', require('./api/articulo'));  
  app.use('/api/tipoarticulos', require('./api/tipoarticulo'));  
  app.use('/api/proveedors', require('./api/proveedor')); 
  app.use('/api/clientes', require('./api/cliente')); 
  app.use('/api/menus', require('./api/menu')); 
  app.use('/api/presupuestos', require('./api/presupuesto')); 
   // app.use('/api/detcompras', require('./api/detcompra')); 
  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('views')}/404.html`));
    });
}
