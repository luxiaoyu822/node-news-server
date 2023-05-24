const NewsService = require('../../service/backend/NewsService')

const NewsController = {
  add: async (req, res) => {
    try {
      const cover = req.file ? `/newsuploads/${req.file.filename}` : ''
      const { title, content, categroy, isPublish } = req.body
      await NewsService.add({
        cover,
        title,
        content,
        categroy: Number(categroy),
        isPublish: Number(isPublish),
        editTime: new Date(),
      })
      res.send({
        code: 1,
        info: '添加成功',
      })
    } catch (error) {
      res.send({
        code: -1,
        info: '添加失败',
      })
    }
  },
  getList: async (req, res) => {
    try {
      const result = await NewsService.getList()
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
  publish: async (req, res) => {
    try {
      const result = await NewsService.publish({
        ...req.body,
        editTime: new Date(),
      })
      res.send({
        code: 1,
        info: '修改成功',
        data: result,
      })
    } catch (error) {
      console.log(error)
      res.send({
        code: -1,
        info: '修改失败',
      })
    }
  },
  delete: async (req, res) => {
    try {
      await NewsService.delete(req.body)
      res.send({
        code: 1,
        info: '删除成功',
        data: result,
      })
    } catch (error) {
      console.log(error)
      res.send({
        code: -1,
        info: '删除失败',
      })
    }
  },
  getNews: async (req, res) => {
    try {
      const result = await NewsService.getNews(req.params)
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
  edit: async (req, res) => {
    try {
      const cover = req.file ? `/newsuploads/${req.file.filename}` : ''
      await NewsService.edit({ ...req.body, cover, editTime: new Date() })
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

module.exports = NewsController
