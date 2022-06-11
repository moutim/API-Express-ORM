const service = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const products = await service.getAllProducts();

  res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const product = await service.getProductsById(req.params.id);

  res.status(200).json(product)
};

const createProduct = async (req, res) => {
  const product = await service.createProduct(req.body);

  res.status(201).json(product);
}

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct
};