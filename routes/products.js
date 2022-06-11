const express = require('express');
const controller = require('../controllers/products.controller');
const routes = express.Router();

routes.get('/', controller.getAllProducts);

routes.get('/:id', controller.getProductsById);

module.exports = routes;