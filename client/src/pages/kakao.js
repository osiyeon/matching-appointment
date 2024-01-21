import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useCallback } from "react"

const Kakao = () => {
  const router = useRouter()
  const { code: authCode, error: kakaoServerError } = router.query

  const loginHandler = useCallback(
    async code => {
      // 백엔드에 전송
      const response = await axios.post(
        "http://localhost:3001/api/auth/kakao",
        {
          code,
        }
      )

      if (response.data) {
        // 성공하면 홈으로 리다이렉트
        router.push("/mainList")
      } else {
        // 실패하면 에러 페이지로 리다이렉트
        router.push("/")
      }
    },
    [router]
  )

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode)

      // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
    } else if (kakaoServerError) {
      router.push("/")
    }
  }, [loginHandler, authCode, kakaoServerError, router])
}

export default Kakao
