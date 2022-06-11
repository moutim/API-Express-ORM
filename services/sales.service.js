const { Vendas } = require('../database/models');

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
}

module.exports = {
  getAllSales,
  getSalesById
}