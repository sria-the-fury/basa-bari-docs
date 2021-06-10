import '../styles/globals.css'
import {Fragment} from "react";
import {Navbar} from "../components/menu/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
      <Fragment>
        <Navbar/>
        <Component {...pageProps} />
      </Fragment>

  )
}

export default MyApp
