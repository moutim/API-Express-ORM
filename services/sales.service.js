const { Vendas, vendasProdutos, Produtos } = require('../database/models');

const getAllSales = async () => {
  const sales = await Vendas.findAll();

  if (!sales || sales.length === 0) {
    throw new Error(JSON.stringify({ status: 404, message: 'Vendas nao encontradas.' }));
  }

  return sales;
};

const getSalesById = async (id) => {
  const sales = await Vendas.findAll({ where: { id: id }});

  if (!sales || sales.length === 0) {
    throw new Error(JSON.stringify({ status: 404, message: 'Venda nao encontrada.' }));
  }

  return sales;
};

const updateStock = (body) => {
  const promises = [];

  body.forEach(({ produtoId, quantidade }) => {
    const promiseUpdate = Produtos.decrement('quantidade', 
    { by: quantidade, where: { id: produtoId }});

    promises.push(promiseUpdate);
  });

  return promises;
};

const createSalesProducts = (vendaId, body) => {
  const promises = [];

  body.forEach(({ produtoId, quantidade }) => {
    const salesProducts = vendasProdutos.create({ produtoId, vendaId, quantidade });

    promises.push(salesProducts);
  });

  return promises;
};

const createSale = async (body) => {
  const { dataValues: { id } } = await Vendas.create();

  await Promise.all(createSalesProducts(id, body));
  await Promise.all(updateStock(body));

  return {
    id,
    "itemsSold": [
      ...body
    ]
  };
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale
}