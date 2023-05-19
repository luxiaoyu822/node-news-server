var express = require('express')
const UserController = require('../../controller/backend/UserController')
var UserRouter = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })

UserRouter.post('/backend/login', UserController.login)
UserRouter.put('/backend/user', upload.single('file'), UserController.update)
UserRouter.post('/backend/user', upload.single('file'), UserController.add)
UserRouter.get('/backend/user', UserController.getList)
UserRouter.delete('/backend/user/:id', UserController.delete)
UserRouter.put('/backend/user/:id', UserController.edit)

module.exports = UserRouter
