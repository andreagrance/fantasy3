'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('ciudad', {
    id_ciudad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_pais: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pais',
        key: 'id_pais'
      }
    },
    descripcion_ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
