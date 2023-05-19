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
    return UserModel.create({
      username,
      password,
      gender,
      introduction,
      role,
      avatar,
    })
  },
  getList: async () => {
    return UserModel.find({}, [
      'username',
      'role',
      'avatar',
      'gender',
      'introduction',
    ])
  },
  /* 
异步函数（使用async/await方式或返回Promise对象的函数）默认返回值为一个Promise对象。如果函数中没有返回Promise对象，则在调用该函数时就无法获取到正确的返回值。
在这个示例代码中，如果不加return关键字，相当于在调用UserModel.deleteOne()方法时将返回值丢弃了，而且由于该方法返回的是一个Promise对象，因此无法正常获取到删除操作是否成功的状态信息
  */
  delete: async _id => {
    return UserModel.deleteOne({ _id })
  },
  edit: async (_id, username, role, introduction) => {
    return UserModel.updateOne({ _id },{username, role, introduction})
  },
}

module.exports = UserService
