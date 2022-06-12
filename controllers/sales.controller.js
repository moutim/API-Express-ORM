const service = require('../services/sales.service');

const getAllSales = async (req, res) => {
  const sales = await service.getAllSales();

  res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;

  const sale = await service.getSalesById(id);

  res.status(200).json(sale);
};

const createSale = async (req, res) => {
  const saleResult = await service.createSale(req.body);

  res.status(201).json(saleResult);
}

module.exports = {
  getAllSales,
  getSalesById,
  createSale
}