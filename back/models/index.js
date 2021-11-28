'use strict';
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; 
const config = require('../config/config')[env]; //config에서 환경마다 DB설정세팅된 객체 가져온다.

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
