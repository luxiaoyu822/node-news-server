var express = require('express')
var NewsRouter = express.Router()
const multer = require('multer')
const NewsController = require('../../controller/backend/NewsController')
const upload = multer({ dest: 'public/newsuploads/' })

NewsRouter.post(
  '/backend/news-manage/add',
  upload.single('file'),
  NewsController.add
)
NewsRouter.get('/backend/news-manage/list', NewsController.getList)
NewsRouter.put('/backend/news-manage/publish', NewsController.publish)
NewsRouter.post('/backend/news-manage/delete', NewsController.delete)
NewsRouter.get('/backend/news-manage/news/:id',NewsController.getNews)
module.exports = NewsRouter
