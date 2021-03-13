const express = require('express');

const db = require('../config/db');
const serviceRouter = require('./services');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', serviceRouter(db));

app.listen(3000, () => {
  console.log('Server listening!');
});
