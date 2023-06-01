"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import dynamic from "next/dynamic";
// import AppProvider from "./contexts/AppContext";

const AppProvider = dynamic(() => import("./contexts/AppContext"), {
  ssr: false,
});

export default function Providers({ children }: PropsWithChildren) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        {" "}
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AppProvider>
  );
}
