import React, { useEffect, Fragment } from "react";
import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { theme } from "@Theme/index";

import { CacheProvider, EmotionCache } from "@emotion/react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { createEmotionCache } from "@Utils/create-emotion-cache";

import { GlobalStateProvider } from "@Context/UserContext";
import { GlobalLayoutStateProvider } from "@Context/LayoutContext";

import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const queryClient = new QueryClient()

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <GlobalLayoutStateProvider>
            <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </QueryClientProvider>
            </ThemeProvider>
        </GlobalLayoutStateProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
}
