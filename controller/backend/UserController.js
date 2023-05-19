const UserService = require('../../service/backend/UserService')
const JWT = require('../../util/JWT')
const bcrypt = require('bcrypt')

const UserController = {
  login: async (req, res) => {
    const { password } = req.body
    const result = await UserService.login(req.body)
    try {
      if (!result[0]) {
        res.send({ code: -1, info: '用户不存在' })
      } else {
        const isMatch = await bcrypt.compare(password, result[0].password)
        if (!isMatch) {
          res.send({ code: -1, info: '密码错误' })
        } else {
          const token = JWT.generate(
            {
              _id: result[0]._id,
              username: result[0].username,
            },
            '1d'
          )
          res.header('Authorization', token)
          res.send({
            code: 1,
            info: '用户名密码匹配成功',
            data: {
              username: result[0].username,
              gender: result[0].gender ? result[0].gender : 0,
              introduction: result[0].introduction,
              avatar: result[0].avatar,
              role: result[0].role,
            },
          })
        }
      }
    } catch (error) {
      console.log(error)
      res.send({ code: -1, info: '服务器错误' })
    }
  },

  update: async (req, res) => {
    try {
      const token = req.headers['authorization'].split(' ')[1]
      const { username, gender, introduction } = req.body
      const avatar = req.file ? `/avataruploads/${req.file.filename}` : ''
      const payload = JWT.verify(token)
      await UserService.update({
        _id: payload._id,
        username,
        gender: Number(gender),
        introduction,
        avatar,
      })
      if (avatar) {
        res.send({
          code: 1,
          data: {
            username,
            gender: Number(gender),
            introduction,
            avatar,
          },
        })
      } else {
        res.send({
          code: 1,
          data: {
            username,
            gender: Number(gender),
            introduction,
          },
        })
      }
    } catch (error) {
      res.send({ code: -1, info: '更新失败' })
    }
  },
  add: async (req, res) => {
    try {
      const { username, gender, introduction, role, password } = req.body
      const avatar = req.file ? `/avataruploads/${req.file.filename}` : ''
      await UserService.add({
        username,
        gender: Number(gender),
        introduction,
        avatar,
        role: Number(role),
        password,
      })
      res.send({
        code: 1,
        info: '添加成功',
      })
    } catch (error) {
      res.send({ code: -1, info: '添加失败' })
    }
  },
}
1
module.exports = UserController
