'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('presupuesto', {
    id_presupuesto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cliente',
        key: 'id_cliente'
      },
      nombre_cliente: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    id_menu: {
      type: DataTypes.INTEGER,
      references: {
        model: 'menu',
        key: 'id_menu'
      },
      nombre_menu: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
     cantidad_perso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    costo_total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  });
}
