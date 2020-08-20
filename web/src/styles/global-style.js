import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
${reset} 
  body {
    font-family: "Helvetica Neue";
    text-decoration: none;
    color: ${theme.colors.athensGray};
    background: ${theme.colors.black};
    padding: 24px;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.athensGray};
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
`;
export default GlobalStyle;
