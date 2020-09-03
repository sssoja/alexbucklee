import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexbox, layout, typography, space, grid } from "styled-system";

const HeaderWrapper = styled.header``;

const NavMenu = styled.ul`
  display: flex;
  ${flexbox};
  ${space};
  ${typography};
`;

const Container = styled.div`
  ${layout};
  ${flexbox};
  ${grid};
`;

const StyledLink = styled(Link)`
  ${layout};
  ${flexbox};
  ${grid};
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <NavMenu flexDirection="row" justifyContent="space-between" fontSize={[2, 3]} pb={4}>
      <Container width={["4em", "8em", "7em", "8em"]} display="block">
        <a to="/">{siteTitle}</a>
      </Container>
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
