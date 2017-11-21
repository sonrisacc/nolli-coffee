/* eslint no-console:0 */

const db = require('./dbconfig.js');
const beanSeedData = require('./seeds/beans.js');
// const createTable = require('./utils/readModels.js');
const seedTable = require('./utils/seedTable.js');

db.sequelize
  .authenticate()

  // .then(() => createTable(`${__dirname}/models`, db.sequelize))
  .then(() => db.sequelize.sync({ force: true }))
  // .then(() =>
  //   Promise.all([seedTable.dbcreatUser(db), seedTable.dbcreatBean(db)]),
  // )
  .then(() => seedTable.dbRegionBrand(db, beanSeedData))
  .then(() => seedTable.dbBeans(db, beanSeedData))
  .then(() => db.sequelize.close())
  .then(console.log('Whole process complete!'))
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
