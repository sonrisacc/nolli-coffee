const express = require('express');
const bodyParser = require('body-parser');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.get('/facebook', (req, res) => {
  res.send('GET for /auth/facebook is working');
});

routes.get('/google', (req, res) => {
  res.send('GET for /auth/google is working');
});
module.exports = routes;
