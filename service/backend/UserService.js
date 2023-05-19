const UserModel = require('../../model/UserModel')

const UserService = {
  login: async ({ username }) => {
    return UserModel.find({
      username,
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
  add: async ({ username, password, gender, introduction, role, avatar }) => {
    UserModel.create({
      username,
      password,
      gender,
      introduction,
      role,
      avatar,
    })
  },
}

module.exports = UserService
