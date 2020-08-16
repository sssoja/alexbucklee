import { Link } from "gatsby";
import React from "react";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div>
    <div>
      <div>
        <Link to="/">{siteTitle}</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
