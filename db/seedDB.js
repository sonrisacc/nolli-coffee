/* eslint no-console:0 */

const db = require('./dbconfig.js');
const createTable = require('./utils/readModels.js');
const seedTable = require('./utils/seedTable.js');

db
  .authenticate()
  .then(() => createTable(`${__dirname}/models`, db))
  .then(dbModels =>
    Promise.all([
      seedTable.dbcreatUser(dbModels),
      seedTable.dbcreatBean(dbModels),
    ]),
  )
  .then(() => db.sync())
  .then(() => db.close())
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
