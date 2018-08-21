'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('sucursal', {
    id_compra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'proveedor',
        key: 'id_proveedor'
      }
    },
    nro_timbrado_compra: {
      type: DataTypes.INTEGER,
      allowNull: false,
       autoIncrement: true
    },
    nro_factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
       autoIncrement: true
    },

     descripcion_compra: {
      type: DataTypes.STRING,
      allowNull: false
    },
     cantidad_compra: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_compra: {
      type: DataTypes.DATE,
      allowNull: false
    },

    id_articulo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'articulo',
        key: 'id_articulo'
      }
    },
    precio_compra: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    iva: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_iva: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  });
}
