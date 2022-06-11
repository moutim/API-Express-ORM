const produtos = (sequelize, DataTypes) => {
  const tabelaProdutos = sequelize.define("produtos", {
    nome: DataTypes.STRING,
    quantidade: DataTypes.NUMBER,
  });

  return tabelaProdutos;
}

module.exports = produtos;