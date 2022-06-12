const { authenticateToken } = require('../utils/JWTToken');

const tokenAuthenticate = async (req, res, next) => {
  const { authorization: token } = req.headers;

  authenticateToken(token);

  next();
};

module.exports = tokenAuthenticate;