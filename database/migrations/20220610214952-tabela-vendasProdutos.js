'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vendasProdutos', {}, { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vendasProdutos');
  }
};
