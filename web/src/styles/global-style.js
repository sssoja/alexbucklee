import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue";
    text-decoration: none;
    color: ${theme.colors.athensGray};
    background: ${theme.colors.black};
    padding: 0;
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
