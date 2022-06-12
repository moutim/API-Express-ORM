const { Usuarios, Permissoes } = require('../database/models');
const { generateToken } = require('../utils/JWTToken');

const login = async ({ usuario, senha }) => {
  const user = await Usuarios.findOne({ where: { usuario, senha }});

  if (!user || user.length === 0) {
    throw new Error(JSON.stringify({ status: 404, message: 'Usuario nao encontrado.' }))
  }

  const token = generateToken(JSON.stringify(user));

  return token;
};

module.exports = {
  login
};