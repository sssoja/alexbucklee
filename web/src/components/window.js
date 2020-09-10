import React, { Fragment } from "react";
import styled from "styled-components";
import { typography } from "styled-system";
import styles from "../components/index.module.css";
import gif from "../components/assets/works.gif";

const Wrapper = styled.div`
  ${typography};
`;

const Window = props => {
  const fontSizes = [3, 4, 5, 6];

  return (
    <Fragment>
      <Wrapper fontSize={fontSizes} className={styles.wrapper}>
        <Wrapper className={styles.wrapper}>
          <h1 className={styles.h1}>WINDOW OF OPPORTUNITY</h1>
          <div className={styles.gifWrapper}>
            <img className={styles.gif} src={gif} alt="alex bucklee design works" />
          </div>
        </Wrapper>
      </Wrapper>
    </Fragment>
  );
};

export default Window;
