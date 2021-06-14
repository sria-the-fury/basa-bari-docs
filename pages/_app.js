import '../styles/globals.css'
import {Fragment} from "react";
import {Navbar} from "../components/menu/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-responsive-modal/styles.css';
import 'animate.css/animate.compat.css';


function MyApp({ Component, pageProps }) {
  return (
      <Fragment>
        <Navbar/>
        <Component {...pageProps} />
      </Fragment>

  )
}

export default MyApp
