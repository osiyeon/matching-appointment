const serAuth = require("../services/auth")

exports.kakaoSignIn = async (req, res) => {
  const { code } = req.body

  const { access_token: accessToken } = await serAuth.getKakaoToken(code)

  const data = await serAuth.getUserInfo(accessToken)

  res.json(data)
}
