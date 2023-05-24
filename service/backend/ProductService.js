const ProductModel = require('../../model/ProductModel')

const ProductService = {
  add: async ({ title, introduction, detail, cover, editTime }) => {
    return ProductModel.create({ title, introduction, detail, cover, editTime })
  },
  getList: async () => {
    return ProductModel.find({})
  },
  delete: async ({ _id }) => {
    return ProductModel.deleteOne({ _id })
  },
  getProduct: async ({ id }) => {
    return ProductModel.findOne({ _id: id })
  },
  edit: async ({ _id, title, introduction, detail, cover, editTime }) => {
    if (cover) {
      return ProductModel.updateOne(
        { _id },
        { title, detail, introduction, cover, editTime }
      )
    } else {
      return ProductModel.updateOne(
        { _id },
        { title, detail, introduction, editTime }
      )
    }
  },
}

module.exports = ProductService
