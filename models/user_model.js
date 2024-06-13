var faker = require('faker');
var _ = require('lodash');
/*
 * Demo 用 user 假資料
 */
const users = [
    {
        name: 'admin',
        email: 'admin@demo.com',
        password: '123456',
    },
    {
        name: faker.fake('{{name.lastName}}, {{name.firstName}}'),
        email: faker.internet.email(),
        password: faker.random.word(),
    }
]
  
  const userModel = {
    getAll: () => {
      return users
    },
  
    get: id => {
      return users[id]
    },
  
    findByEmail: email => {
      user = _.find(users, function(o) { return o.email == email; });
      return user
    },
  }
  
  module.exports = userModel