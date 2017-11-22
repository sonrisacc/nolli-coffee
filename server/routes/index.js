/* eslint no-console:0 */
// require('babel-register');
const bodyParser = require('body-parser');

const express = require('express');
const db = require('../../db/dbconfig.js');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use('/bean', require('./bean'));
routes.use('/user', require('./user'));
routes.use('/brew', require('./brew'));
routes.use('/auth', require('./auth'));

// public landing page, will see list of beans
routes.get('/beanlist', (req, res) => {
  db.bean
    .findAll({ limit: 100, order: [['rating', 'DESC']] })
    .then(beans => res.status(202).json(beans));
});

module.exports = routes;
