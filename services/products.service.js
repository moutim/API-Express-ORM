const { Produtos } = require('../database/models');

const getAllProducts = async () => {
  const products = await Produtos.findAll();

  if (!products || products.length === 0) {
    throw new Error(JSON.stringify({ status: 404, message: 'Produtos nao encontrados.' }));
  }

  return products;
};

const getProductsById = async (id) => {
  const product = await Produtos.findByPk(id);

  if (!product || product.length === 0) {
    throw new Error(JSON.stringify({ status: 404, message: 'Produto nao encontrado.' }));
  }

  return product;
};

const createProduct =  ({ nome, quantidade }) => {
  const product = Produtos.create({ nome, quantidade });

  return product;
};

const changeProduct = async ({ nome, quantidade, id }) => {
  await getProductsById(id);

  const product = Produtos.update({ nome, quantidade}, { where: { id: id }});

  return product;
};

const deleteProduct = async (id) => {
  await getProductsById(id);

  const product = Produtos.destroy({ where: { id: id }});

  return product;
}

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  changeProduct,
  deleteProduct
}