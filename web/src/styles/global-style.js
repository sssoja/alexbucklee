import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
${reset} 
  body {
    font-family: "Helvetica Neue";
    text-decoration: none;
    color: ${theme.colors.athensGray};
    background: blue;
    padding: 32px;
    margin: 0px;
    line-height: 1.5;
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
`;
export default GlobalStyle;
