const companyModel = require('../models/company_model');  // 引入 model

const companyController = {
  getAll: (req, res) => {
    const companys = companyModel.getAll()   // 把 companys 用 getAll 拿出來
    res.send({ success: true, companys }).end();
  },

  get: (req, res) => {
    const id = req.params.id
    const company = companyModel.get(id)
    res.send({ success: true, company }).end();
  }
}

module.exports = companyController;