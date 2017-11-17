/* eslint no-console:0 */

const db = require('./dbconfig.js');
// const createTable = require('./utils/readModels.js');
const seedTable = require('./utils/seedTable.js');

db.sequelize
  .authenticate()
  .then(() => db.sequelize.drop())
  // .then(() => createTable(`${__dirname}/models`, db.sequelize))
  .then(() => db.sequelize.sync())
  .then(() =>
    Promise.all([seedTable.dbcreatUser(db), seedTable.dbcreatBean(db)]),
  )
  .then(() => db.sequelize.close())
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
