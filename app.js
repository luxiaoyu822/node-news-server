var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
const UserRouter = require('./routes/backend/UserRouter')
const JWT = require('./util/JWT')
const NewsRouter = require('./routes/backend/NewsRouter')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

/* 
/backend 后台系统
/frontend 前台系统
*/

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

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
