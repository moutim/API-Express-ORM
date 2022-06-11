'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vendasProdutos', {
      produtoId: {
        allowNull: false,
        type:Sequelize.INTEGER,
        references: {
          model: 'produtos',
          id: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      vendaId: {
        allowNull: false,
        type:Sequelize.INTEGER,
        references: {
          model: 'vendas',
          id: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    }, { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vendasProdutos');
  }
};
