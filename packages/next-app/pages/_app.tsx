import { Web3ReactProvider } from "@web3-react/core"
import Amplify from "aws-amplify"
import { AppProps } from "next/app"
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

import getLibrary from "../getLibrary"
import "../styles/globals.css"
import awsconfig from "../src/aws-exports"
import theme from "../src/theme"
import AuthProvider from "../src/context/AuthProvider";

Amplify.configure(awsconfig)

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </Web3ReactProvider>
  )
}

export default NextWeb3App
