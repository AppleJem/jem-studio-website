import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
  colors: {
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2c3748",
      800: "#1a202c",
      900: "#171923",
    },
    jemyellow: {
      50: "#fffce5",
      100: "#fff7b3",
      200: "#fff280",
      300: "#ffed4d",
      400: "#ffe81a",
      500: "#ffe500",
      600: "#e6ce00",
      700: "#b3a000",
      800: "#807300",
      900: "#4d4500",
    },
    justgray: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#808080",
      600: "#737373",
      700: "#595959",
      800: "#404040",
      900: "#262626",
    },
  },
  fonts: { heading: "Inter", body: "Inter" },
});
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
      </Head>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;