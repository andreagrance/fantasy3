'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  sequelize: {
    uri: process.env.POSTGRES_URL || 'postgres://postgres:123@localhost:5432/postgres',
    options: {
      //logging: false,
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      /*username: 'postgres',
      password: '1234',*/
      define: {
        timestamps: false,
        freezeTableName: true
      }
    }
  },

  seedDB: true

};
