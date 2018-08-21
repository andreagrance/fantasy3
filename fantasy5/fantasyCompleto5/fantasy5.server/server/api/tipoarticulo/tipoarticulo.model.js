'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('tipoarticulo', {
    id_tipoarticulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipoarticulo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
