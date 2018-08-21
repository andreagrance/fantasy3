'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('proveedor', {
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RUC_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
     telefono_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    barrio_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ciudad_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pais_proveedor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
