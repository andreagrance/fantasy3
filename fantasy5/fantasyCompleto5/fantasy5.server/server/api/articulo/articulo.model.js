'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('articulo', {
    id_articulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_tipoarticulo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tipoarticulo',
        key: 'id_tipoarticulo'
      }
    },
    descripcion_articulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
      cantidad_articulo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
      precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
      iva: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
      estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
}
