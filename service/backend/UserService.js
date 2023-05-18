const UserModel = require('../../model/UserModel')

const UserService = {
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password,
    })
  },
  update: async ({ _id, username, gender, introduction, avatar }) => {
    if (avatar) {
      return UserModel.updateOne(
        { _id },
        { username, gender, introduction, avatar }
      )
    } else {
      return UserModel.updateOne({ _id }, { username, gender, introduction })
    }
  },
}

module.exports = UserService
