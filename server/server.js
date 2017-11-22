/* eslint no-console:0 */
// require('babel-register');

const path = require('path');
const routes = require('./routes');
const express = require('express');

const port = 1337;
const host = '127.0.0.1';

const app = express();

app.use(express.static(path.join(__dirname, '../')));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Listening at http://${host}:${port}`);
});
