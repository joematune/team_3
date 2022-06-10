import { ApolloProvider } from "@apollo/client"
import { Web3ReactProvider } from "@web3-react/core"
import Amplify from "aws-amplify"
import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import getLibrary from "../getLibrary"
import "../styles/globals.css"
import awsconfig from "./../src/aws-exports"
import client from "../apollo/client"
import { theme } from "../src/theme"

Amplify.configure(awsconfig)

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ApolloProvider
          // @ts-ignore
          client={client}
        >
          <Component {...pageProps} />
        </ApolloProvider>
      </Web3ReactProvider>
    </ChakraProvider>
  )
}

export default NextWeb3App
