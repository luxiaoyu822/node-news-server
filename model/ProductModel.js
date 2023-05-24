const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductType = new Schema({
  title: {
    type: String,
    defaul: '',
  },
  introduction: {
    type: String,
    default: '',
  },
  detail: {
    type: String,
    default: '',
  },
  cover: {
    type: String,
    default: '',
  },
  editTime: {
    type: Date,
    default: null,
  },
})

const ProductModel = mongoose.model('product', ProductType)
module.exports = ProductModel
