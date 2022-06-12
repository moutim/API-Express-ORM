'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        usuario: 'vitormoutim',
        senha: '123',
        permissaoId: 1
      },
      {
        usuario: 'trybe',
        senha: 'trybe',
        permissaoId: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
