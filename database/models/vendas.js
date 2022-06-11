const vendas = (sequelize, DataTypes) => {
  const tabelaVendas = sequelize.define("Vendas", {
    date: DataTypes.DATE,
  }, { timestamps: false });

  return tabelaVendas;
}

module.exports = vendas;