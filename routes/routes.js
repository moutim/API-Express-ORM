const express = require('express');

const routes = express.Router();

routes.use('/produtos', require('./products'));

module.exports = routes;