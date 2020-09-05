import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import styles from "./header.module.css";
import HamburgerIcon from "./icon/hamburger";

import { color, typography, position, grid } from "styled-system";

const visibleStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  background-size: cover;
  opacity: 1;
  background-color: blue;
  top: 0;
  z-index: 2;
`;

const Overlay = styled.dialog`
  display: none;
  ${props => props.isOpen && visibleStyles}
`;

const navLink = ({ page, url }) => {
  return <Link to={url}>{page}</Link>;
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    {
      page: "art",
      url: "/art/"
    },
    {
      page: "design",
      url: "/design/"
    },
    {
      page: "about",
      url: "/about/"
    },
    {
      page: "contact",
      url: "/contact/"
    }
  ];

  return (
    <Fragment>
      <button className={styles.navButton}>
        <i className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
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
