'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_cliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
     telefono_cliente: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
