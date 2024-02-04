const axios = require("axios");

const serUser = require("./user");

const header = {
	"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
	Authorization: "Bearer ",
};

exports.getKakaoToken = async code => {
	const restApiKey = process.env.OAUTH_REST_API_KEY;

	const data = {
		grant_type: "authorization_code",
		client_id: restApiKey,
		redirect_uri: process.env.REDIRECT_URI,
		code,
	};

	const kakaoToken = await axios.post(
		"https://kauth.kakao.com/oauth/token",
		data,
		{ headers: header }
	);

	return kakaoToken.data;
};

/** kakao 로그인 후, 신규 유저일 경우 유저 생성하는 함수 */
exports.getUserInfo = async accessToken => {
	header.Authorization += accessToken;

	// 카카오 사용자 정보 조회
	const {
		data: {
			id: userId,
			properties: { nickname },
			kakao_account: { email, age_range: ageRange, gender },
		},
	} = await axios.get("https://kapi.kakao.com/v2/user/me", {
		headers: header,
	});

	const userInfo = serUser.findUserByUserId(userId);

	if (userInfo) return userInfo;

	const newUserInfo = {
		userId,
		nickname,
		...(email && { email }),
		...(ageRange && { ageRange }),
		...(gender && { gender }),
	};

	const ret = await serUser.addUser(newUserInfo);

	return ret;
};
