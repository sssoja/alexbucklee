import { Link } from "gatsby";
import React from "react";
import styles from "./header.module.css";
import HamburgerIcon from "./icon/hamburger";

const Header = ({ siteTitle }) => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>
      <Link to="/">{siteTitle}</Link>
    </div>
    <ul className={styles.nav}>
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
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
    <i className={styles.icon}>
      <HamburgerIcon />
    </i>
  </div>
);

export default Header;
