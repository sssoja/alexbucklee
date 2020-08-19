import { Link } from "gatsby";
import React from "react";
// import styled from "styled-components";
// import { color, space, flexbox } from "styled-system";

// const HeaderWrapper = styled.header`
//   display: flex;
//   width: 100%;
//   ${space};
//   ${flexbox};
// `;

// const StyledLink = styled(Link)`
//   ${color}
// `;

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/">{siteTitle}</Link>
    <nav>
      <ul>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
