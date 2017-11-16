const express = require('express');
const bodyParser = require('body-parser');
const authCtrl = require('./authCtrl.js');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.get('/facebook', authCtrl.facebookAuth);
routes.get('/google', authCtrl.googleAuth);
module.exports = routes;
