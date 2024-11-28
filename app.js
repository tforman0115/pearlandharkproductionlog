const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Handle parsing json body from requests
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Register routes
const mainRoutes = require('./routes/main');

// Handle routes
app.use('/', mainRoutes)

module.exports = app;