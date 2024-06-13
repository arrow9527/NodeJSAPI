const userModel = require('../models/user_model');  // 引入 model
const jwt = require('jsonwebtoken');

const userController = {
  getAll: (req, res) => {
    const users = userModel.getAll()   // 把 users 用 getAll 拿出來
    res.send({ success: true, users }).end();
  },

  get: (req, res) => {
    const id = req.params.id
    const user = userModel.get(id)
    res.send({ success: true, user }).end();
  },

  // 登入
  login: (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log('username: %s password: %s', username, password );
      const user = userModel.findByEmail(email);
      if (!user || !(user.password == password)) {
        return res.status(401).send('Invalid email or password');
      }
      const token = jwt.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: 
        process.env.JWT_EXPIRATION_TIME });
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = userController;