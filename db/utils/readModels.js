const fs = require('fs');
const path = require('path');

module.exports = function readModel(__dirname, sequelize) {
  return new Promise((resolve, reject) => {
    const db = {};
    fs
      .readdirSync(__dirname)
      .filter(file => file.indexOf('.js') !== 0)
      .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
      });

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
    if (db) {
      resolve(db);
    } else {
      reject();
    }
    // return db;
  });
};
