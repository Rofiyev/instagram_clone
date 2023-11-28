import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@mantine/core/styles.css";
import "react-multi-carousel/lib/styles.css";
import "@/styles/globals.css";

import dynamic from "next/dynamic";
const Providers = dynamic(() => import("@/providers"), { ssr: false });

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
