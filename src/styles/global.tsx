import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 html, body {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
  body {
    font-family: ${(props) => props.theme.fonts.join(", ")};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
  }
`;
