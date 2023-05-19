const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserType = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    enum: [0, 1, 2],
    default: 0,
  },
  introduction: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  role: {
    type: Number,
    enum: [1, 2],
    default: 2,
  },
})

UserType.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})
const UserModel = mongoose.model('user', UserType)
module.exports = UserModel
