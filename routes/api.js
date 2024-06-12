var faker = require('faker');
const companyController = require('../controllers/company_controller');
const clientController = require('../controllers/client_controller');
var express = require('express');
var router = express.Router();

faker.locale = 'zh_TW';

// 自行建立的 data
const data = [{
  id: 1,
  name: faker.commerce.productName(),
  price: faker.commerce.price(100, 200, 0, '$'),
  adjective: faker.commerce.productAdjective(),
  description: faker.commerce.productDescription()
}];
// 設置請求路徑為 /products 請求方法為 get
router.get("/products", function (req, res, next) {
  // 使用 res.send() 方法設置響應傳送 { success: true, data }
  // 使用 res.end() 方法結束響應 
  // 這裏可以直接在 send() 後 .end() 也可以換行寫 res.end()
  res.send({ success: true, data }).end();
});

// 設置請求路徑為 /product 請求方法為 post
router.post("/product", function (req, res) {
  // req.body 是前端傳來的資料
  const product = req.body;
  // 後端要處理新增 id
  product.id = new Date().getTime();
  // 把資料加到 data 中
  data.push(product);
  // 傳響應告訴前端已新增成功
  res.send({ success: true, data }).end();
  // console.log 看一下 data, 確認是否新增成功
  console.log(data);
});

// 設置請求路徑為 /product/:id 請求方法為 delete
router.delete("/product/:id", function (req, res) {
  // 首先通過 req.params.id 獲取傳入的 id
  const id = req.params.id;
  // 然後遍歷 data 找出 id 符合的那筆資料 將它刪除
  data.forEach((item, key) => {
    if (item.id == id) {
      data.splice(key, 1);
    }
  });
  // 最後傳送響應告訴前端已刪除成功
  res.send({ success: true, data }).end();
});

// company
router.get('/companys', companyController.getAll)
router.get('/company/:id', companyController.get)

// client
router.get('/clients', clientController.getAll)
router.get('/client/:id', clientController.get)

module.exports = router;
