import Script from "next/script"
import "bootstrap/dist/css/bootstrap.css"
import "react-calendar/dist/Calendar.css"
import "../../public/static/fonts/style.css"

function App({ Component, pageProps }) {
  const kakaoInit = () => {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY)
    console.log(window.Kakao.isInitialized())
  }

  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      ></Script>
    </>
  )
}

export default App
