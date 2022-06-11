const service = require('../services/sales.service');

const getAllSales = async (req, res) => {
  const sales = await service.getAllSales();

  res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;

  const sale = await service.getSalesById(id);

  res.status(200).json(sale);
}

module.exports = {
  getAllSales,
  getSalesById
}