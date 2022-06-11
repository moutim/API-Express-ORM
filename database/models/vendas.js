const vendas = (sequelize, DataTypes) => {
  const tabelaVendas = sequelize.define("Vendas", {
    data: DataTypes.DATE,
  }, { timestamps: false });

  return tabelaVendas;
}

module.exports = vendas;