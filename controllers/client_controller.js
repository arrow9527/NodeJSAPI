const clientModel = require('../models/client_model');  // 引入 model

const clientController = {
  getAll: (req, res) => {
    const clients = clientModel.getAll()   // 把 clients 用 getAll 拿出來
    res.send({ success: true, clients }).end();
  },

  get: (req, res) => {
    const id = req.params.id
    const client = clientModel.get(id)
    res.send({ success: true, client }).end();
  }
}

module.exports = clientController;