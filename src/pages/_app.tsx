import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

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
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}
