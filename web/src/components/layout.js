import React from "react";
import Header from "./header";
import GlobalStyle from "../styles/global-style";

const Layout = ({ children, siteTitle }) => (
  <>
    <GlobalStyle />
    <Header siteTitle={siteTitle} />
    <div>{children}</div>
    <footer>
      <div></div>
    </footer>
  </>
);

export default Layout;
