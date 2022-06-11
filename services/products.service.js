const { Produtos } = require('../database/models');

const getAllProducts = () => {
  const products = Produtos.findAll();

  if (!products || products.length === 0) {
    throw new Error(JSON.stringify({ status: 404, message: 'Produtos nao encontrados.' }));
  }

  return products;
};

module.exports = {
  getAllProducts
}