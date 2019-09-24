'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        id: 1,
        username: 'peter',
        password: '1234',
        role: 'contributor',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  }
};
