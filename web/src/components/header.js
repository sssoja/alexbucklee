import { Link } from "gatsby";
import React from "react";
import styles from "./header.module.css";
import BurgerMenu from "./burger";

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
    <BurgerMenu />
  </div>
);

export default Header;
