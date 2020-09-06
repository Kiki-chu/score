import { Fragment } from "react";
import Head from "next/head";

import "./default.scss";

function ScoreApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default ScoreApp;
