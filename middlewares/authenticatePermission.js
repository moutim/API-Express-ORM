const { decodeToken } = require('../utils/JWTToken');
const { Usuarios } = require('../database/models');

const authenticatePermission = async (req, res, next) => {
  const { authorization: token } = req.headers;

  const payload = decodeToken(token);
  
  const { usuario, senha } = payload;

  const { dataValues: user } = await Usuarios.findOne({ where: { usuario, senha }});

  if (user.permissaoId !== 1) {
    throw new Error(JSON.stringify({ status: 401, message: 'Apenas administradores tem permissao para essa acao.'}))
  }

  next();
};

module.exports = authenticatePermission;