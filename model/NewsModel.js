const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsType = new Schema({
  title: {
    type: String,
    default:''
  },
  content: {
    type: String,
    default:''
  },
  categroy: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
  cover: {
    type: String,
    default: '',
  },
  isPublish: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  editTime: {
    type: Date,
    default: null,
  },
})

const NewsModel = mongoose.model('new', NewsType)
module.exports = NewsModel
