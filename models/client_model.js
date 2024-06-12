var faker = require('faker');

const clients = [
    {
        name: faker.fake('{{name.lastName}}, {{name.firstName}}'),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('+886 9########'),
        company: {
          name: faker.company.companyName() + faker.company.companySuffix(),
          address: faker.address.city() + " " + faker.address.county() + " " + faker.address.streetAddress()
        }
    },
    {
        name: faker.fake('{{name.lastName}}, {{name.firstName}}'),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('+886 9########'),
        company: {
          name: faker.company.companyName() + faker.company.companySuffix(),
          address: faker.address.city() + " " + faker.address.county() + " " + faker.address.streetAddress()
        }
    }
]
  
  const clientModel = {
    getAll: () => {
      return clients
    },
  
    get: id => {
      return clients[id]
    }
  }
  
  module.exports = clientModel