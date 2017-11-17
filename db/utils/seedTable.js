/* eslint no-console:0 */
// const path = require('path');
// const db = require('../dbconfig.js');

const dbcreatUser = db => {
  db.user.create({
    username: 'sonrisa chen',
    email: 'fantastic4@gmail.com',
    google_id: '107291565452880607951',
    google_token: 'abc12345',
    avatar: 'https://avatars2.githubusercontent.com/u/31486494?v=4&s=200',
    accessToken: 'abc123',
  });
};
//
const dbcreatBean = db =>
  db.bean.create(
    {
      bean_name: 'Ethiopia Gedeb Halo Beriti',
      rating: 94,
      review_date: 'Nov 2017',
      price: 16,
      logo_url: 'http://www.bigcreekcoffeeroasters.com',
      brand: {
        brand_name: 'JBC Coffee Roasters',
        brand_url: 'https://www.jbccoffeeroasters.com/90-plus-coffees',
      },
      region: {
        origin: 'Huila Department, southern Colombia',
        location: 'Madison, Wisconsin',
      },
    },
    {
      include: [db.brand, db.region],
    },
  );

module.exports = { dbcreatUser, dbcreatBean };
