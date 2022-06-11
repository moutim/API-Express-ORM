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
};

const changeProduct = async (req, res) => {
  await service.changeProduct({ ...req.body });

  res.status(200).json(req.body);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await service.deleteProduct(id);

  res.status(200).json({ message: 'Produto deletado com sucesso!'});
};


module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  changeProduct,
  deleteProduct
};