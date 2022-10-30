import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { InMemoryCache, ApolloClient } from '@apollo/client'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>oshizukani</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
