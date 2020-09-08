import { Link } from "gatsby";
import React from "react";
import styles from "./header.module.css";
import BurgerMenu from "./burger";

const Links = [
  {
    page: "Art",
    url: "/art/"
  },
  {
    page: "Design",
    url: "/design/"
  },
  {
    page: "About",
    url: "/about/"
  },
  {
    page: "Contact",
    url: "/contact/"
  }
];

const navLink = ({ page, url }) => {
  return (
    <li className={styles.li} key={page}>
      <Link to={url}>{page}</Link>
    </li>
  );
};

const Header = ({ siteTitle }) => (
  <div>
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to="/">{siteTitle}</Link>
      </div>
      <ul className={styles.nav}>{Links.map(navLink)}</ul>
      <BurgerMenu />
    </div>
  </div>
);

export default Header;
