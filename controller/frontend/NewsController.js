const NewsService = require('../../service/frontend/NewsService')

const NewsController = {
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
}

module.exports = NewsController
