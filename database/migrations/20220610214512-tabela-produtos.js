'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};
