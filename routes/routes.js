const express = require('express');
const middlewares = require('../middlewares');
const routes = express.Router();

routes.use('/login', require('./login'));

routes.use('/produtos', middlewares.authenticateToken, require('./products'));

routes.use('/vendas', middlewares.authenticateToken, require('./sales'));

module.exports = routes;