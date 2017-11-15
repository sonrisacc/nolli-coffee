const express = require('express');
const bodyParser = require('body-parser');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// map view of beans
routes.get('/map', (req, res) => {
  res.send('GET for /bean/map is working');
});

// individual bean detail
routes.get('/:id', (req, res) => {
  res.send('GET for /bean/:id is working');
});

// user's own wishlist for beanList
routes.get('/wishlist', (req, res) => {
  res.send('GET for /bean/wishlist is working');
});

// user's own purchase history of beans
routes.get('/purchased', (req, res) => {
  res.send('GET for /bean/wishlist is working');
});

module.exports = routes;
