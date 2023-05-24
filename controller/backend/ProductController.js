const ProductService = require('../../service/backend/ProductService')

const ProductController = {
  add: async (req, res) => {
    try {
      const cover = req.file ? `/productuploads/${req.file.filename}` : ''
      const { title, introduction, detail } = req.body
      await ProductService.add({
        title,
        introduction,
        detail,
        cover,
        editTime: new Date(),
      })
      res.send({
        code: 1,
        info: '添加成功',
      })
    } catch (error) {
      res.send({ code: -1, info: '添加失败' })
    }
  },
  getList: async (req, res) => {
    try {
      const result = await ProductService.getList()
      res.send({
        code: 1,
        info: '查询成功',
        data: result,
      })
    } catch (error) {
      res.send({ code: -1, info: '查询失败' })
    }
  },
  delete: async (req, res) => {
    try {
      await ProductService.delete(req.body)
      res.send({
        code: 1,
        info: '删除成功',
      })
    } catch (error) {
      res.send({ code: -1, info: '删除失败' })
    }
  },
  getProduct: async (req, res) => {
    try {
      const result = await ProductService.getProduct(req.params)
      res.send({
        code: 1,
        info: '获取成功',
        data: result,
      })
    } catch (error) {
      console.log(error)
      res.send({
        code: -1,
        info: '获取失败',
      })
    }
  },
  edit: async (req,res) => {
    try {
      const cover = req.file ? `/productuploads/${req.file.filename}` : ''
      await ProductService.edit({ ...req.body, cover, editTime: new Date() })
      res.send({
        code: 1,
        info: '修改成功',
      })
    } catch (error) {
      console.log(error)
      res.send({
        code: -1,
        info: '修改失败',
      })
    }
  },
}

module.exports = ProductController
