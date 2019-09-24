'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Ratings', [{
        id: 1,
        stars: 8,
        title: 'Awesome!',
        review: 'ssadf asdf asdf asd fasdfasd f asdf asdf asdfasd fasd fa',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ClipId: 1
      }, {
        id: 2,
        stars: 1,
        ClipId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ClipId: 1
      }, {
        id: 3,
        stars: 5,
        title: 'Mew.',
        review: 'asdasf asdf asdfa sdfa sdfasdfasd fa sdf asdf asdf adsfa',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ClipId: 1
      }], {});
  }
};
