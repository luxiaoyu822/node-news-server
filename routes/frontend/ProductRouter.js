var express = require('express')
const ProductController = require('../../controller/frontend/ProductController')
var ProductRouter = express.Router()
ProductRouter.get('/frontend/product/list',ProductController.getList)

module.exports = ProductRouter
