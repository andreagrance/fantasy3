'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('pais', {
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion_pais: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
