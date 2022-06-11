const service = require('../services/sales.service');

const getAllSales = async (req, res) => {
  const sales = await service.getAllSales();

  res.status(200).json(sales);
};

module.exports = {
  getAllSales
}