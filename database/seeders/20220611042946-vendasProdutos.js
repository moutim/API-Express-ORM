'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vendasProdutos', [
      {
        produtoId: 1,
        vendaId: 1,
        quantidade: 5
      },
      {
        produtoId: 2,
        vendaId: 1,
        quantidade: 10
      },
      {
        produtoId: 3,
        vendaId: 2,
        quantidade: 15
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendas', null, {});
  }
};
