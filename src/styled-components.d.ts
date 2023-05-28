import { ThemeInterface } from "./styles/theme.tsx";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
