import "bootstrap/dist/css/bootstrap.css"
import "react-calendar/dist/Calendar.css"
import "../../public/static/fonts/style.css"
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
