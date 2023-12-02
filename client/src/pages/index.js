import { Button } from "reactstrap"
import React from "react"

const REDIRECT_URI = "http://localhost:3000/mainList"

const Index = ({ apiKey }) => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${apiKey}&redirect_uri=${REDIRECT_URI}`

  const backgroundStyle = {
    background: "url(/images/first_page.svg)",
    width: "100%",
    height: "100vh",
    ["backgroundSize"]: "cover",
    display: "flex",
    ["align-items"]: "center",
    ["justify-content"]: "center",
  }
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
  }

  return (
    <div style={backgroundStyle}>
      {/* <img src="/images/kakao_login_medium_wide.png" /> */}
      <Button
        style={buttonStyle}
        onClick={() => {
          window.location.href = kakaoAuthUrl
        }}
      >
        <img src="/images/kakao_icon.svg" />
        카카오톡으로 3초만에 시작하기
      </Button>
    </div>
  )
}

export async function getServerSideProps() {
  const apiKey = process.env.REACT_APP_OAUTH_REST_API_KEY

  return {
    props: {
      apiKey: apiKey || null,
    },
  }
}

export default Index
