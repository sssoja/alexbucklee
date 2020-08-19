import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "../styles/reset.css";
import GlobalStyle from "../styles/global-style";
import Header from "./header";

const Layout = ({ children, siteTitle }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header siteTitle={siteTitle} />
    <div>{children}</div>
    <footer>
      <div>
        <div>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </ThemeProvider>
);

export default Layout;
