/* eslint no-console:0 */

const db = require('./dbconfig.js');
// const createTable = require('./utils/readModels.js');
const seedTable = require('./utils/seedTable.js');

db.sequelize
  .authenticate()

  // .then(() => createTable(`${__dirname}/models`, db.sequelize))
  .then(() => db.sequelize.sync({ force: true }))
  // .then(() =>
  //   Promise.all([seedTable.dbcreatUser(db), seedTable.dbcreatBean(db)]),
  // )
  .then(() => seedTable(db))
  .then(() => db.sequelize.close())
  .then(console.log('Whole process complete!'))
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
