const vendasProdutos = (sequelize, DataTypes) => {
  const tabelaVendasProdutos = sequelize.define("vendasProdutos", {},
    { timestamps: false }
  );

  tabelaVendasProdutos.associate = (models) => {
    models.Produtos.belongsToMany(models.Vendas, {
      through: tabelaVendasProdutos,
      foreignKey: 'produtoId',
      otherKey: 'vendaId',
      as: 'produto'
    });

    models.Vendas.belongsToMany(models.Produtos, {
      through: tabelaVendasProdutos,
      foreignKey: "vendaId",
      otherKey: "produtoId",
      as: 'venda'
    });
  }

  return tabelaVendasProdutos;
}

module.exports = vendasProdutos;