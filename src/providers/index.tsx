import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { FC, ReactNode } from "react";
import { Containers } from "@/modules/auth";

const theme = createTheme({
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
});

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      <Containers.Auth>
        {children}
        <Notifications position="top-right" />
      </Containers.Auth>
    </MantineProvider>
  );
};

export default Providers;
