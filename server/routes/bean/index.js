const express = require('express');
const bodyParser = require('body-parser');
const beanCtrl = require('./beanCtrl');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// map view of beans
routes.get('/map', beanCtrl.showMapView);

// individual bean detail
routes.get('/:id', beanCtrl.showBeanDetail);

// user's own wishlist for beanList
routes.get('/wishlist', beanCtrl.showWishList);

// user's own purchase history of beans
// should post total weight, and rosted date
// mark, add to brewlist
routes.get('/purchased', beanCtrl.showPurchased);

module.exports = routes;
