import "@/styles/globals.css";
import "@fontsource/darker-grotesque/900.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/600.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
