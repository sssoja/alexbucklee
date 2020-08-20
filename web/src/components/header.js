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
          <StyledLink to="/about/">About</StyledLink>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
);

export default Header;
