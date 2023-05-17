var express = require('express')
const UserController = require('../../controller/backend/UserController')
var UserRouter = express.Router()

UserRouter.post('/backend/user/login', UserController.login)

module.exports = UserRouter
