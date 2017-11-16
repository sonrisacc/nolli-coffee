const express = require('express');
const bodyParser = require('body-parser');
const brewCtrl = require('./brewCtrl');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// user's recent brewHistory
routes.get('/history', brewCtrl.showBrewHistory);

// technique for brewing(cold brew/ pour over/ ...) and the bean
routes.get('/methodandbean', brewCtrl.recordBrewProcess);
// ^ should have a post request to say, bean finished and delete from here

// post beanBrew process/result

module.exports = routes;
