const { Vendas } = require('../database/models');

const getAllSales = async () => {
  const sales = await Vendas.findAll();

  if (!sales || sales.length === 0) {
    throw new Error(JSON.stringify({ status: 404, message: 'Vendas nao encontradas.' }));
  }

  return sales;
};

module.exports = {
  getAllSales
}