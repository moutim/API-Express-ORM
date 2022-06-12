const serviceProducts = require('../services/products.service');

const verifyProductId = async (body) => {
  body.forEach(async (p) => {
    if (!p.produtoId) {
      throw new Error(JSON.stringify(
        { status: 400, message: '"produtoId" é obrigatorio.' },
      ));
    }
  });
};

const verifyQuantity = (body) => {
  body.forEach((p) => {
    if (p.quantidade === undefined) {
      throw new Error(JSON.stringify(
        { status: 400, message: '"quantidade" é obrigatorio.' },
      ));
    }

    if (p.quantidade < 1) {
      throw new Error(JSON.stringify(
        { status: 422, message: '"quantidade" deve ser maior que 0.' },
      ));
    }
  });
};

const verifyBodyFormat = (body) => {
  if (typeof body !== 'object') {
    throw new Error(JSON.stringify(
      { status: 422, message: 'O body da requisicao deve ser um array de objetos.' },
    ));
  }

  body.forEach((p, i) => {
    if (typeof body[i] !== 'object') {
      throw new Error(JSON.stringify(
        { status: 422, message: 'O body da requisicao deve ser um array de objetos.' },
      ));
    }
  });
};

const verifyQuantityProducts = async (body) => {
  const validate = await Promise.all(
    body.map(async ({ produtoId, quantidade }) => {
      const product = await serviceProducts.getProductsById(produtoId);
      if (quantidade > product.quantidade) return false
      return true
    })
  );

  return validate;
};

const verifyBodySales = async (req, res, next) => {
  const verifyStock = await verifyQuantityProducts(req.body);
  if (verifyStock.includes(false)) {
    throw new Error(JSON.stringify({ status: 422, message: 'Verifique a quantidade em estoque para realizar essa venda.' }))
  }

  verifyBodyFormat(req.body);
  verifyProductId(req.body);
  verifyQuantity(req.body);

  next();
};

module.exports = verifyBodySales;