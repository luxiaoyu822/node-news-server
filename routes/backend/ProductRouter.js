var express = require('express')
var ProductRouter = express.Router()
const multer = require('multer')
const ProductController = require('../../controller/backend/ProductController')
const upload = multer({ dest: 'public/productuploads/' })

ProductRouter.post(
  '/backend/product-manage/add',
  upload.single('file'),
  ProductController.add
)
ProductRouter.post('/backend/product-manage/delete', ProductController.delete)
ProductRouter.post('/backend/product-manage/edit',upload.single('file'), ProductController.edit)
ProductRouter.get('/backend/product-manage/list', ProductController.getList)
ProductRouter.get(
  '/backend/product-manage/product/:id',
  ProductController.getProduct
)

module.exports = ProductRouter
