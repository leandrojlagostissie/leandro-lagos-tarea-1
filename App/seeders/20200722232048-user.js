'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [{
      userName: 'leandro-lagos-tissie',
      email: 'leandrolagos93@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userName: 'aaaaaaaaaaaaaaa',
      email: 'aaaaaaaaaaaaaaa@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userName: 'bbbbbbbbbb',
      email: 'bbbbbbbbbb@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
