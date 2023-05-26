var express = require('express')
var NewsRouter = express.Router()
const NewsController = require('../../controller/frontend/NewsController')

NewsRouter.get('/frontend/news/list', NewsController.getList)
NewsRouter.get('/frontend/news/recent', NewsController.getRecentNews)
NewsRouter.get('/frontend/news/:id', NewsController.getNews)

module.exports = NewsRouter
