const axios = require("axios")

const REDIRECT_URI = "http://localhost:3000/kakao"

const header = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  Authorization: "Bearer ",
}

exports.getKakaoToken = async code => {
  const restApiKey = process.env.OAUTH_REST_API_KEY

  const data = {
    grant_type: "authorization_code",
    client_id: restApiKey,
    redirect_uri: REDIRECT_URI,
    code,
  }

  const kakaoToken = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    data,
    { headers: header }
  )

  return kakaoToken.data
}

exports.getUserInfo = async accessToken => {
  header.Authorization += accessToken

  // 카카오 사용자 정보 조회
  const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: header,
  })

  // id, email 추출
  return { id: data.id, email: data.kakao_account.email }
}
