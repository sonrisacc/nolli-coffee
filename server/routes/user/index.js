const express = require('express');
const bodyParser = require('body-parser');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// for single user's info
routes.get('/:id', (req, res) => {
  res.send('GET for /user/:id is working');
});

module.exports = routes;
