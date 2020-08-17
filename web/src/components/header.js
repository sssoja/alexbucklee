import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <div>
        <Link to="/">{siteTitle}</Link>
      </div>
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
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
