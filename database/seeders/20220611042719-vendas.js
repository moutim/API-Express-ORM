'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vendas', [
      {
        data: Sequelize.fn('now')
      },
      {
        data: Sequelize.fn('now')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendas', null, {});
  }
};
