const express = require('express');

const routes = express.Router();

routes.use('/login', require('./login'));

routes.use('/produtos', require('./products'));

routes.use('/vendas', require('./sales'));

module.exports = routes;