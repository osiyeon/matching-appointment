import axios from "axios"
import { useEffect } from "react"
import Header from "../components/Header/Header"
import AppointmentList from "../containers/AppointmentList/AppointmentList"

const REDIRECT_URI = "http://localhost:3000/mainList"

const MainList = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code")

    axios
      .post("http://localhost:3001/api/auth/kakao", {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_OAUTH_REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
      })
      .then(data => {
        console.log({ data })
      })
  }, [])
  return (
    <>
      <Header title="약속 잡기" addButton introButton />
      <AppointmentList />
    </>
  )
}

export default MainList
