import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>jem-studio-website</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <CacheProvider value={emotionCache}>
          <Component {...pageProps} />
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
