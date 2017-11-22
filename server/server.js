/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const port = 1337;
const host = '127.0.0.1';

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../')));
app.use('/', routes);

app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`);
});
