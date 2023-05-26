const NewsModel = require('../../model/NewsModel')

const NewsService = {
  getList: async () => {
    return NewsModel.find({ isPublish: 1 }).sort({ editTime: -1 })
  },
  getNews: async ({ id }) => {
    return NewsModel.findOne({ _id: id })
  },
  getRecentNews: async ({limit}) => {
    return NewsModel.find({ isPublish: 1 }).sort({ editTime: -1 }).limit(limit)
  },
}

module.exports = NewsService
