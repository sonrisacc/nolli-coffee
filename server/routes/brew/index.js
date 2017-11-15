const express = require('express');
const bodyParser = require('body-parser');

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// user's recent brewHistory
routes.get('/history', (req, res) => {
  res.send('GET for /brew/history is working');
});

// technique for brewing(cold brew/ pour over/ ...) and the bean
routes.get('/methodandbean', (req, res) => {
  res.send('GET for /brew/methodandbean is working');
});
// ^ should have a post request to say, bean finished and delete from here

// post beanBrew process/result

module.exports = routes;
