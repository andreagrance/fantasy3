'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('barrio', {
    id_barrio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ciudad',
        key: 'id_ciudad'
      }
    },
    descripcion_barrio: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
