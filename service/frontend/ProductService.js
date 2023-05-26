const ProductModel = require('../../model/ProductModel')
const ProductService = {
  getList: async () => {
    return ProductModel.find({})
  },
}
module.exports=ProductService
