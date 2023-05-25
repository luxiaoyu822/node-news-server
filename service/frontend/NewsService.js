const NewsModel = require('../../model/NewsModel')

const NewsService = {
  getList: async () => {
    return NewsModel.find({ isPublish: 1 }).sort({ editTime: -1 })
  },
}

module.exports = NewsService
