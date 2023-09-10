import { useEffect } from "react"
import axios from "axios"

import Header from "../components/Header/Header"
import MainAppointment from "../containers/MainAppointment/MainAppointment"

const Main = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code")

    axios.post("http://localhost:3001/api/auth/kakao", { code }).then(data => {
      console.log({ data })
    })
  }, [])
  return (
    <>
      <Header title="예진이와 친구들" />
      <MainAppointment />
    </>
  )
}

export default Main
