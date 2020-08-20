import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexbox, layout, typography } from "styled-system";

const HeaderWrapper = styled.header``;

const NavMenu = styled.ul`
  display: flex;
  ${flexbox};
  ${layout};
`;

const StyledLink = styled(Link)`
  ${layout};
  ${flexbox};
  ${typography};
  &:hover {
    color: #ffff00;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <NavMenu flexDirection="row" justifyContent="space-between">
      <StyledLink to="/" maxWidth="11%" flexWrap="wrap">
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
        <StyledLink to="/archive/">Archive</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact/">Contact</StyledLink>
      </li>
    </NavMenu>
  </HeaderWrapper>
);

export default Header;
