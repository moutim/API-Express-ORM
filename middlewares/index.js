const errorHandler = require('./errorHandler');
const verifyBodyProducts = require('./verifyBodyProducts');
const verifyBodyLogin = require('./verifyBodyLogin');
const authenticateToken = require('./authenticateToken');

module.exports = {
  errorHandler,
  verifyBodyProducts,
  verifyBodyLogin,
  authenticateToken
}