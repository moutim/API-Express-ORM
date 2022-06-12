const errorHandler = (error, req, res, next) => {
  let erro = { status: 500, message: error.message };

  try {
    erro = JSON.parse(error.message);
    res.status(erro.status).json({ message: erro.message });
  } catch(e) {
    res.status(erro.status).json({ message: erro.message });
  }

  next();
};

module.exports = errorHandler;