/* eslint no-console:0 */
const dbMapBrand = (db, data) =>
  new Promise((resolve, reject) => {
    let cache = {};
    data.forEach(cur => {
      if (!cache[cur.brand] && !!cur.brand) {
        cache[cur.brand] = cur.brand;
        db.brand
          .create({
            brand_name: cur.brand,
            brand_url: cur.brandUrl,
          })
          .then(console.log('brand inserted'))
          .catch(err => reject(err));
      }
    });
    cache = {};
    resolve();
  });

const dbMapRegion = (db, data) =>
  new Promise((resolve, reject) => {
    let cache = {};
    data.forEach(cur => {
      if (!cache[cur.origin] && !!cur.origin) {
        cache[cur.origin] = cur.origin;
        db.region
          .create({
            origin: cur.origin,
            location: cur.location,
          })
          .then(console.log('region inserted'))
          .catch(err => reject(err));
      }
    });
    cache = {};
    resolve();
  });

const dbcreatBean = (db, data, cache) =>
  db.bean.create({
    rating: data.rating,
    bean_name: data.bean,
    review_date: data.reviewDate,
    price: data.price,
    detail_url: data.beanUrl,
    logo_url: data.logo,
    roast: data.roast,
    agtron: data.agtron,
    aroma: data.aroma,
    acidity: data.acidity || 0,
    withMilk: data.withMilk || 0,
    brandId: cache.brand,
    regionId: cache.origion,
    notes: data.notes,
  });

const dbMapBean = (db, cur) =>
  new Promise((resolve, reject) => {
    const cacheBean = {};
    if (cur.location) {
      db.brand.findOne({ where: { brand_name: cur.brand } }).then(brand => {
        cacheBean.brand = brand.id;
        db.region.findOne({ where: { origin: cur.origin } }).then(region => {
          cacheBean.origion = region.id;
          dbcreatBean(db, cur, cacheBean)
            .then(() => {
              console.log('bean inserted');
              resolve();
            })
            .catch(err => reject(err));
        });
      });
    } else {
      resolve();
    }
  });

const dbBeans = (db, data) => Promise.all(data.map(cur => dbMapBean(db, cur)));

const dbRegionBrand = (db, data) =>
  Promise.all([dbMapRegion(db, data), dbMapBrand(db, data)]);

module.exports = { dbRegionBrand, dbBeans };

/*
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
*/
