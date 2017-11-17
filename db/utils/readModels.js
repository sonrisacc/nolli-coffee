/* eslint no-console:0 */
/* const fs = require('fs');
const path = require('path');

module.exports = function readModel(__dirname, sequelize) {
  return new Promise((resolve, reject) => {
    const db = {};
    db.sequelize = sequelize;
    fs
      .readdirSync(__dirname)

      .forEach(file => {
        const model = sequelize.import(path.join(__dirname, '/models/', file));
        db[model.name] = model;
      });

    Object.keys(db).forEach(modelName => {
      if ('associate' in db[modelName]) {
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
*/
