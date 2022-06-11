const express = require('express');
const controller = require('../controllers/products.controller');
const middlewares = require('../middlewares');
const routes = express.Router();

routes.get('/', controller.getAllProducts);

routes.get('/:id', controller.getProductsById);

routes.post('/', middlewares.verifyBodyProducts, controller.createProduct);

module.exports = routes;