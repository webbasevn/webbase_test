import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../utils/theme'
import { SWRConfig } from 'swr'
import axiosClient from '../api-client/axiosClient'
import createEmotionCache from "../utils/create-emotion-cache"
import { CacheProvider } from "@emotion/react"
import '../styles/globals.css'
import EmptyLayout from '../themes/layouts/empty'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

// disable dev tool, turn on when finish dev

// if (
//   typeof window !== "undefined" &&
//   typeof window.navigator !== "undefined" &&
//   typeof navigator !== "undefined" &&
//   navigator.userAgent
// ) {
//   const disableDevtool = require("disable-devtool");
//   disableDevtool();
// }

export default function MyApp(props) {

  const { Component,emotionCache = clientSideEmotionCache, pageProps } = props

  const Layout = Component.Layout ?? EmptyLayout

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{fetcher: url => axiosClient.get(url), shouldRetryOnError: true}}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}