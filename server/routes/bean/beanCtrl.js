const db = require('../../../db/dbconfig.js');
exports.showMapView = (req, res) => {
  res.send('GET for /bean/map is working');
};

exports.showBeanDetail = (req, res) => {
  res.send('GET for /bean/:id is working');
};

exports.showWishList = (req, res) => {
  res.send('GET for /bean/wishlist is working');
};

exports.showPurchased = (req, res) => {
  res.send('GET for /bean/purchased is working');
};
