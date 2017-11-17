/* eslint no-console:0 */

const Sequelize = require('sequelize');

// const Op = Sequelize.Op;
// const operatorsAliases = {
//   $gt: Op.gt,
// };
const sequelize = new Sequelize('nolicoffee', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize;
