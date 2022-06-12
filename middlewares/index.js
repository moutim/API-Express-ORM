const errorHandler = require('./errorHandler');
const verifyBodyProducts = require('./verifyBodyProducts');
const verifyBodyLogin = require('./verifyBodyLogin');
const verifyBodySales = require('./verifyBodySales');
const authenticateToken = require('./authenticateToken');
const authenticatePermission = require('./authenticatePermission');

module.exports = {
  errorHandler,
  verifyBodyProducts,
  verifyBodyLogin,
  authenticateToken,
  authenticatePermission,
  verifyBodySales
}