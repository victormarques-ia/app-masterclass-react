export interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    divider: string;
    error: string;
  };
  fonts: string[];
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  fontWeights: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  radius: string;
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: "#30A952",
    secondary: "#248740",
    background: "#FAFAFA",
    text: "#2C3E50",
    divider: "#DDDDDD",
    error: "#DC3545",
  },
  fonts: ["Roboto", "Arial", "sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  radius: "4px",
  breakpoints: {
    xs: 0,
    sm: 650,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
};

export default theme;
