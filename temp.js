/* eslint no-console:0 */
// const beanSeedData = require('../seeds/beans.js');

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
      brands: {
        brand_name: 'JBC Coffee Roasters',
        brand_url: 'https://www.jbccoffeeroasters.com/90-plus-coffees',
      },
      regions: {
        origin: 'Huila Department, southern Colombia',
        location: 'Madison, Wisconsin',
      },
    },
    {
      includes: [db.brand, db.region],
    },
  );

// const dbcreatBean = (db, data) =>
//   db.bean.create(
//     {
//       rating: data.rating,
//       bean_name: data.bean,
//       review_date: data.reviewDate,
//       price: data.price,
//       detail_url: data.beanUrl,
//       logo_url: data.logo,
//       roast: data.roast,
//       agtron: data.agtron,
//       aroma: data.aroma,
//       body: data.body,
//       withMilk: data.withMilk,
//       brand: {
//         brand_name: data.brand,
//         brand_url: data.brandUrl,
//       },
//       region: {
//         origin: data.origin,
//         location: data.location,
//       },
//     },
//     {
//       association: [db.brand, db.region],
//     },
//   );
//
// const beanSeedHandler = db =>
//   Promise.all(beanSeedData.map(cur => dbcreatBean(db, cur))).then(
//     console.log('Whole process complete!'),
//   );

const dbBulkCreate = db =>
  Promise.all([dbcreatUser(db), dbcreatBean(db)]).then(
    console.log('doneBulkCreate'),
  );

module.exports = dbBulkCreate;

module.exports = function BeanUserSchema(sequelize, DataTypes) {
  const BeanUser = sequelize.define('bean_user', {
    starred: DataTypes.BOOLEAN,
    purchased: DataTypes.BOOLEAN,
    watched: DataTypes.BOOLEAN,
  });

  return BeanUser;
};
