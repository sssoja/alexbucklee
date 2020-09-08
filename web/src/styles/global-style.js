import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
${reset}
  html {
    height: 100%;
}
  body {
    font-family: "Helvetica Neue";
    text-decoration: none;
    min-height: 100%;
    height: 100%;
    width: 100%;
    color: ${theme.colors.athensGray};
    background: blue;
    padding: 32px;
    margin: 0px;
    line-height: 1.5;
  }
  #root {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.athensGray};
    &:hover {
      color: #ffff00;
  }
  ul {
    margin: 0px;
    list-style-type: none;
  } 
  
`;
export default GlobalStyle;
