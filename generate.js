const faker = require('faker');
const times = require('lodash/times');
const uuidv1 = require('uuid/v1');

module.exports = function() {
  return {
    todos: times(100, function() {
      return {
        id: uuidv1(),
        text: faker.lorem.words(),
        completed: faker.random.boolean()
      };
    })
  };
};
