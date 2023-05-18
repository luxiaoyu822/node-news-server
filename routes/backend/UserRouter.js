var express = require('express')
const UserController = require('../../controller/backend/UserController')
var UserRouter = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })

UserRouter.post('/backend/user/login', UserController.login)
UserRouter.post('/backend/user/update',upload.single('file'), UserController.update)

module.exports = UserRouter
