import "../styles/globals.css";
import type { AppProps } from "next/app";
import { getLibrary } from "../config/web3/";
import { Web3ReactProvider } from "@web3-react/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
