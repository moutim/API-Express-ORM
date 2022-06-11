'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vendasProdutos', {
      produtoId: {
        allowNull: false,
        type:Sequelize.INTEGER,
        references: {
          model: 'Produtos',
          id: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      vendaId: {
        allowNull: false,
        type:Sequelize.INTEGER,
        references: {
          model: 'Vendas',
          id: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vendasProdutos');
  }
};
