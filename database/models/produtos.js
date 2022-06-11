const produtos = (sequelize, DataTypes) => {
  const tabelaProdutos = sequelize.define("Produtos", {
    nome: DataTypes.STRING,
    quantidade: DataTypes.NUMBER,
  }, { timestamps: false });

  return tabelaProdutos;
}

module.exports = produtos;