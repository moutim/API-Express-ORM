const errorHandler = (error, req, res, next) => {
  let erro = { status: 500, message: 'Erro interno.' }

  if (error.message && !error.errno) {
    erro = JSON.parse(error.message);
  };
  
  res.status(erro.status).json({ message: erro.message });

  next();
};

module.exports = errorHandler;