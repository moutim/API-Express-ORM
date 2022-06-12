const express = require('express');
const controller = require('../controllers/products.controller');
const middlewares = require('../middlewares');
const routes = express.Router();

routes.get('/', controller.getAllProducts);

routes.get('/:id', controller.getProductsById);

routes.post('/',
  middlewares.authenticatePermission, 
  middlewares.verifyBodyProducts, 
  controller.createProduct
);

routes.put('/',
  middlewares.authenticatePermission, 
  middlewares.verifyBodyProducts,
  controller.changeProduct
);

routes.delete('/:id',
  middlewares.authenticatePermission,
  controller.deleteProduct
);

module.exports = routes;