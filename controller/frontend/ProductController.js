const ProductService = require('../../service/frontend/ProductService')

const ProductController = {
  getList: async (req, res) => {
    try {
      const result = await ProductService.getList()
      res.send({
        code: 1,
        info: '获取成功',
        data: result,
      })
    } catch (error) {
      res.send({
        code: -1,
        info: '获取失败',
      })
    }
  },
}

module.exports = ProductController
