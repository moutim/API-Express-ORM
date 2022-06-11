'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissoes', [
      {
        nivel: 'administrador',
      },
      {
        nivel: 'funcionario',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissoes', null, {});
  }
};
