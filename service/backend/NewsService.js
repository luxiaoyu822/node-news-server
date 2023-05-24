const NewsModel = require('../../model/NewsModel')

const NewsService = {
  add: async ({ title, content, categroy, cover, isPublish, editTime }) => {
    return NewsModel.create({
      title,
      content,
      categroy,
      cover,
      isPublish,
      editTime,
    })
  },
  getList: async () => {
    return NewsModel.find({})
  },
  publish: async ({ _id, isPublish, editTime }) => {
    return NewsModel.updateOne({ _id }, { isPublish, editTime })
  },
  delete: async ({ _id }) => {
    return NewsModel.deleteOne({ _id })
  },
  getNews: async ({ id }) => {
    return NewsModel.findOne({ _id: id })
  },
}

module.exports = NewsService
