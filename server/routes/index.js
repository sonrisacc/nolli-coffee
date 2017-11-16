/* eslint no-console:0 */
require('babel-register');
// const bodyParser = require('body-parser');

const express = require('express');

const routes = express.Router();
// routes.use(bodyParser.urlencoded({ extended: true }));
// routes.use(bodyParser.json());

routes.use('/bean', require('./bean'));
routes.use('/user', require('./user'));
routes.use('/brew', require('./brew'));
routes.use('/auth', require('./auth'));

// public landing page, will see list of beans
routes.get('/beanlist', (req, res) => {
  res.send('GET for /beanList is working');
});

module.exports = routes;
