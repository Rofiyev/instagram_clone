import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { MantineProvider, createTheme } from "@mantine/core";
import NextNProgress from "nextjs-progressbar";
import "@mantine/core/styles.css";
import "react-multi-carousel/lib/styles.css";
import "@/styles/globals.css";
import { Containers } from "@/modules/auth";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const theme = createTheme({
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <MantineProvider theme={theme}>
        <Containers.Auth>
          <NextNProgress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </Containers.Auth>
      </MantineProvider>
    </div>
  );
}
