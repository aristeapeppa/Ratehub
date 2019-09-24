'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Clips', [{
        id: 1,
        title: 'Chimaera: The Deep Sea Phantom',
        description: 'The Chimera, or Ghost Shark, looks like it’s skin has been stitched together.',
        duration: 429,
        uid: 'asQhHT_09HM',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'How Venom Destroys Your Insides',
        description: 'For many of us, spiders, snakes, and centipedes trigger an innate fear. While it may seem to be due to their often many legs, or lack thereof, deeper down the phobia comes from their venom.',
        duration: 764,
        uid: 'ZgICmt5xg54',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  }
};
