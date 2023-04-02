import type { AppProps } from "next/app";
import "../styles/style.css";
import { Web3Provider } from "@/providers/Web3";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  );
}
