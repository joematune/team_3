import { ApolloProvider } from "@apollo/client"
import { Web3ReactProvider } from "@web3-react/core"
import Amplify from "aws-amplify"
import type { AppProps } from "next/app"
import getLibrary from "../getLibrary"
import "../styles/globals.css"
import awsconfig from "./../src/aws-exports"
import client from "../apollo/client"

Amplify.configure(awsconfig)

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ApolloProvider
        // @ts-ignore
        client={client}
      >
        <Component {...pageProps} />
      </ApolloProvider>
    </Web3ReactProvider>
  )
}

export default NextWeb3App
