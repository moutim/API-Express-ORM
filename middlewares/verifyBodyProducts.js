const verifyName = (nome) => {
  if (!nome) throw new Error(JSON.stringify({ status: 400, message: '"nome" é obrigatorio.' }));

  if (nome.length < 5) {
    throw new Error(JSON.stringify(
    { status: 422, message: '"nome" deve conter no minimo 5 caracteres.' },
    )); 
  }
};

const verifyQuantity = (quantidade) => {
  if (quantidade === undefined) {
    throw new Error(JSON.stringify(
    { status: 400, message: '"quantidade" é obrigatorio.' },
    )); 
  }

  if (!Number.isInteger(quantidade) || quantidade < 1) {
    throw new Error(JSON.stringify(
      { status: 422, message: '"quantidade" deve ser maior que 0.' },
    ));
  }
};

const verifyBodyProducts = (req, res, next) => {
  const { nome, quantidade } = req.body;

  verifyName(nome);
  verifyQuantity(quantidade);
  
  next();
};

module.exports = verifyBodyProducts;