var express = require('express')
const UserController = require('../../controller/backend/UserController')
var UserRouter = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })

UserRouter.post('/backend/login', UserController.login)
UserRouter.post(
  '/backend/user/update',
  upload.single('file'),
  UserController.update
)
UserRouter.post('/backend/user/add', upload.single('file'), UserController.add)

module.exports = UserRouter
