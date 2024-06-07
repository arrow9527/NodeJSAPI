var faker = require('faker');

const companys = [
    {
        name: faker.company.companyName() + faker.company.companySuffix(),
        address: faker.address.city() + " " + faker.address.county() + " " + faker.address.streetAddress()
    },
    {
        name: faker.company.companyName() + faker.company.companySuffix(),
        address: faker.address.city() + " " + faker.address.county() + " " + faker.address.streetAddress()
    }
]
  
  const companyModel = {
    getAll: () => {
      return companys
    },
  
    get: id => {
      return companys[id]
    }
  }
  
  module.exports = companyModel