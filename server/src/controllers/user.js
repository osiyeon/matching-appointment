const REDIRECT_URI = "http://localhost:3001/api/user/login"

const serUser = require("../services/user")

exports.addUser = async (req, res) => {
  const userInfo = req.body
  console.log(userInfo)

  const userInfos = await serUser.addUser(userInfo)

  res.json({ userInfos })
}

exports.kakaoCallback = async (req, res) => {
  console.log("-------req:", req)
}

exports.test = (req, res) => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REST_API_KEY}&redirect_uri=${REDIRECT_URI}`

  console.log("--hi")
  return res.status(302).redirect(kakaoAuthUrl)
}

exports.login = (req, res) => {
  console.log("----req.query: ", req.query)
  console.log("-----req.params: ", req.params)
  return res.json({})
}
