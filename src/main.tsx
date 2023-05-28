import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/global";
import theme, { ThemeInterface } from "./styles/theme.tsx";
import { ThemeProvider } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {" "}
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
