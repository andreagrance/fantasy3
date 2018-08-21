'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('locales', {
    id_locales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion_locales: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
