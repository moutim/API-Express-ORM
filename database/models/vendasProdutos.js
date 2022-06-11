const vendasProdutos = (sequelize, DataTypes) => {
  const tabelaVendasProdutos = sequelize.define("vendasProdutos", {},
    { timestamps: false }
  );

  tabelaVendasProdutos.associate = (models) => {
    models.produtos.belongsToMany(models.vendas, {
      through: tabelaVendasProdutos,
      foreignKey: 'produtoId',
      otherKey: 'vendaId',
      as: 'produto'
    });

    models.vendas.belongsToMany(models.produtos, {
      through: tabelaVendasProdutos,
      foreignKey: "vendaId",
      otherKey: "produtoId",
      as: 'venda'
    });
  }

  return tabelaVendasProdutos;
}

module.exports = vendasProdutos;