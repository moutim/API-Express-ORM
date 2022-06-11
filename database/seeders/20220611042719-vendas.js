'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vendas', [
      {
        data: Sequelize.fn('now')
      },
      {
        data: Sequelize.fn('now')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendas', null, {});
  }
};
