import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
      </Head>
      <Component {...pageProps} />
      
    </React.Fragment>
  );
}

export default MyApp;
