import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexbox, layout, typography, space } from "styled-system";

const HeaderWrapper = styled.header``;

const NavMenu = styled.ul`
  display: flex;
  ${flexbox};
  ${space};
  ${typography};
`;

const StyledLink = styled(Link)`
  ${layout};
  ${flexbox};
`;

const fontSizes = [1, 2, 3, 4];

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <NavMenu flexDirection="row" justifyContent="space-between" fontSize={fontSizes} pb={5}>
      <StyledLink to="/" flexWrap="wrap" flexDirection="row" width="14%">
        {siteTitle}
      </StyledLink>

      <li>
        <StyledLink to="/art/">Art</StyledLink>
      </li>
      <li>
        <StyledLink to="/design/">Design</StyledLink>
      </li>
      <li>
        <StyledLink to="/about/">About</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact/">Contact</StyledLink>
      </li>
    </NavMenu>
  </HeaderWrapper>
);

export default Header;
