const service = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const products = await service.getAllProducts();

  res.status(200).json(products);
};

module.exports = {
  getAllProducts
};