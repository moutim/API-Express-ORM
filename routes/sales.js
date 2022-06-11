const express = require('express');
const controller = require('../controllers/sales.controller');
const middlewares = require('../middlewares');
const routes = express.Router();

routes.get('/', controller.getAllSales);

routes.get('/:id', controller.getSalesById);

module.exports = routes;