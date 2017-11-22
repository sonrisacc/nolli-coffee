/* eslint no-console:0 */

const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const Op = Sequelize.Op;
const operatorsAliases = {
  $gt: Op.gt,
};
const sequelize = new Sequelize('nolicoffee', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  operatorsAliases,
});

const db = {};

fs.readdirSync(path.join(__dirname, '/models')).forEach(file => {
  const model = sequelize.import(path.join(__dirname, '/models/', file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
