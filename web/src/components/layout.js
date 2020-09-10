import React, { Suspense, lazy } from "react";
import GlobalStyle from "../styles/global-style";

const Header = lazy(() => import("./header"));

const Layout = ({ siteTitle, children }) => (
  <>
    {" "}
    <Suspense fallback={<div>Loading</div>}>
      <GlobalStyle />
      <Header siteTitle={siteTitle} />

      <Suspense fallback={<div>Loading</div>}>
        <div>{children}</div>
      </Suspense>
      <footer />
    </Suspense>
  </>
);

export default Layout;
