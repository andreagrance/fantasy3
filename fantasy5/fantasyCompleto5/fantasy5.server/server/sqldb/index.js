/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options),
};

// Insert models below

db.User = db.sequelize.import('../api/user/user.model');
db.articulo = db.sequelize.import('../api/articulo/articulo.model');
db.tipoarticulo = db.sequelize.import('../api/tipoarticulo/tipoarticulo.model');
db.proveedor = db.sequelize.import('../api/proveedor/proveedor.model');
db.cliente = db.sequelize.import('../api/cliente/cliente.model');
db.menu = db.sequelize.import('../api/menu/menu.model');
db.presupuesto = db.sequelize.import('../api/presupuesto/presupuesto.model');
//db.detcompra = db.sequelize.import('../api/detcompra/detcompra.model');
//Relacion articulo-tipo de articulo
db.articulo.belongsTo(db.tipoarticulo,{foreignKey:'id_tipoarticulo', sourceKey: 'id_tipoarticulo'});
db.tipoarticulo.hasMany(db.articulo, {foreignKey: 'id_tipoarticulo', sourceKey: 'id_tipoarticulo'});


db.presupuesto.belongsTo(db.cliente,{foreignKey:'id_cliente', sourceKey: 'id_cliente'});
db.cliente.hasMany(db.presupuesto, {foreignKey: 'id_cliente', sourceKey: 'id_cliente'});

db.presupuesto.belongsTo(db.menu,{foreignKey:'id_menu', sourceKey: 'id_menu'});
db.menu.hasMany(db.presupuesto, {foreignKey: 'id_menu', sourceKey: 'id_menu'});


module.exports = db;
