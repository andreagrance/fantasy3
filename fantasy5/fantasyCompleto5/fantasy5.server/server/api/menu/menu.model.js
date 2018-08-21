'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('menu', {
    id_menu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_menu: {
      type: DataTypes.STRING,
      allowNull: false
    },
     costo_menu: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
}
