/* eslint no-console:0 */
const fs = require('fs');
const path = require('path');

module.exports = function readModel(__dirname, sequelize) {
  return new Promise((resolve, reject) => {
    const db = {};
    db.sequelize = sequelize;

    fs
      .readdirSync(__dirname)
      .filter(file => file.indexOf('.js') !== 0)
      .forEach(file => {
        const modelName = file.slice(0, -3);
        console.log('line15 modelName', modelName);
        console.log('line16', path.join(__dirname, file));
        db[modelName] = sequelize.import(path.join(__dirname, file));
      });

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
    if (db) {
      console.log('line16', db);
      resolve(db);
    } else {
      reject();
    }
    // return db;
  });
};
