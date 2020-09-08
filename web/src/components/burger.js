import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import styles from "./header.module.css";
import HamburgerIcon from "./icon/hamburger";

const visibleStyles = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 107vh;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  border: none;
  background-size: cover;
  opacity: 1;
  background-color: blue;
  top: 0;
  z-index: 1;
  overflow: hidden;
  line-height: 1.5;
  font-size: 1.2em;
`;

const Overlay = styled.dialog`
  display: none;
  ${props => props.isOpen && visibleStyles}
`;

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
    <div key={page}>
      <Link to={url}>{page}</Link>
    </div>
  );
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <button className={styles.navButton}>
        <i onClick={() => setIsOpen(!isOpen)}>
          <HamburgerIcon />
        </i>
      </button>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <ul onClick={() => setIsOpen(!isOpen)} className={styles.navMenu}>
            {Links.map(navLink)}
          </ul>
        </div>
      </Overlay>
    </Fragment>
  );
};

export default BurgerMenu;
