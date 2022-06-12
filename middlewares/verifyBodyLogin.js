const verifyUser = (usuario) => {
  if (!usuario) throw new Error(JSON.stringify({ status: 400, message: '"Usuario" é obrigatorio.' }));
};

const verifyPassword = (senha) => {
  if (!senha) {
    throw new Error(JSON.stringify(
    { status: 400, message: '"Senha" é obrigatorio.' },
    )); 
  }
};

const verifyBodyLogin = (req, res, next) => {
  const { usuario, senha } = req.body;

  verifyUser(usuario);
  verifyPassword(senha);
  
  next();
};

module.exports = verifyBodyLogin;