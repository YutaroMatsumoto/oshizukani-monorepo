import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { msalConfig } from 'src/config/authConfig'

const pca = new PublicClientApplication(msalConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={pca}>
      <Head>
        <title>oshizukani</title>
      </Head>
      <Component {...pageProps} />
    </MsalProvider>
  )
}

export default MyApp
