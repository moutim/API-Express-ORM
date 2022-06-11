const vendas = (sequelize, DataTypes) => {
  const tabelaVendas = sequelize.define("vendas", {
    date: DataTypes.DATE,
  });

  return tabelaVendas;
}

module.exports = vendas;