const serUser = require("../services/user")

exports.addUser = async (req, res) => {
  const userInfo = req.body
  console.log(userInfo)

  const userInfos = await serUser.addUser(userInfo)

  res.json({ userInfos })
}

exports.login = (req, res) => {
  console.log("----req.query: ", req.query)
  console.log("-----req.params: ", req.params)
  return res.json({})
}
