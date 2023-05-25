var express = require('express')
var NewsRouter = express.Router()
const NewsController = require('../../controller/frontend/NewsController')

NewsRouter.get('/frontend/news/list', NewsController.getList)

module.exports = NewsRouter
