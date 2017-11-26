/* eslint no-console:0 */
const db = require('../../../db/dbconfig.js');

exports.showMapView = (req, res) => {
  res.send('GET for /bean/map is working');
};

exports.showBeanDetail = (req, res) => {
  // console.log('line 8 ', req.params);
  db.bean
    .findOne({
      where: { id: req.params.id },
      attributes: [
        'rating',
        'review_date',
        'detail_url',
        'agtron',
        'aroma',
        'acidity',
        'notes',
        'withMilk',
      ],
      include: [db.brand, db.region],
    })
    .then(data => {
      const beanDetail = {
        rating: data.dataValues.rating,
        review_date: data.dataValues.review_date,
        detail_url: data.dataValues.detail_url,
        agtron: data.dataValues.agtron,
        aroma: data.dataValues.aroma,
        acidity: data.dataValues.acidity,
        notes: data.dataValues.notes,
        withMilk: data.dataValues.withMilk,
        brand_name: data.dataValues.brand.dataValues.brand_name,
        brand_url: data.dataValues.brand.dataValues.brand_url,
        origin: data.dataValues.region.dataValues.origin,
        location: data.dataValues.region.dataValues.location,
      };
      res.status(202).json(beanDetail);
    });
};

exports.showWishList = (req, res) => {
  res.send('GET for /bean/wishlist is working');
};

exports.showPurchased = (req, res) => {
  res.send('GET for /bean/purchased is working');
};
