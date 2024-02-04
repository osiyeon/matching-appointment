import { Button } from "reactstrap";
import React from "react";

const REDIRECT_URI = "http://localhost:3000/kakao";

const Index = ({ apiKey }) => {
	const backgroundStyle = {
		background: "url(/images/first_page.svg)",
		width: "100%",
		height: "100vh",
		["backgroundSize"]: "cover",
		display: "flex",
		["align-items"]: "center",
		["justify-content"]: "center",
	};
	const buttonStyle = {
		background: "#FAE100",
		color: "#000000",
		border: "none",
		left: "1.125rem",
		width: "22.125rem",
		height: "50px",
		["border-radius"]: "1.875rem",
		["font-weight"]: "600",
		["font-size"]: "1rem",
		["margin-top"]: "8.5rem",
	};

	const kakaoLogin = () => {
		window.Kakao.Auth.authorize({
			redirectUri: REDIRECT_URI,
		});
	};

	return (
		<div style={backgroundStyle}>
			<Button style={buttonStyle} onClick={kakaoLogin}>
				<img src="/images/kakao_icon.svg" />
				카카오톡으로 3초만에 시작하기
			</Button>
		</div>
	);
};

export async function getServerSideProps() {
	const apiKey = process.env.REACT_APP_OAUTH_REST_API_KEY;

	return {
		props: {
			apiKey: apiKey || null,
		},
	};
}

export default Index;
