var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const UserRouter = require('./routes/backend/UserRouter')
const JWT = require('./util/JWT')
const NewsRouter = require('./routes/backend/NewsRouter')
const frontendNewsRouter = require('./routes/frontend/NewsRouter')
const ProductRouter = require('./routes/backend/ProductRouter')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
//frontend 前后系统
app.use(frontendNewsRouter)
//backend 后台系统 经过token验证
app.use((req, res, next) => {
  if (req.url === '/backend/login') {
    next()
    return
  }

  const token = req.headers['authorization'].split(' ')[1]
  if (token) {
    const payload = JWT.verify(token)
    if (payload) {
      const newToken = JWT.generate(
        {
          _id: payload._id,
          username: payload.username,
        },
        '1d'
      )
      res.header('Authorization', newToken)
      next()
    } else {
      res.send({ code: -1, info: '身份验证失效' })
    }
  }
})

app.use(UserRouter)
app.use(NewsRouter)
app.use(ProductRouter)

app.use(function (req, res, next) {
  next(createError(404))
})

module.exports = app
