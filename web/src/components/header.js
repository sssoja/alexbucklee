import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { color, space, flexbox } from "styled-system";

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  ${space};
  ${flexbox};
`;

const StyledLink = styled(Link)`
  ${color}
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StyledLink to="/">{siteTitle}</StyledLink>
    <nav>
      <ul>
        <li>
          <Link to="/art/">Art</Link>
        </li>
        <li>
          <Link to="/design/">Design</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/archive/">Archive</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
);

export default Header;
