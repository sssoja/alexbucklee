import React from "react";
import Job from "./job";
import styles from "./about.module.css";

function Experience(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <h1 className={styles.h1}>Bio</h1>
        <div className={styles.verticalDiv1}></div>
        <div> {props.bio && <p>{props.bio}</p>}</div>
      </div>

      <div className={styles.row}>
        <h1 className={styles.h1}>Experience</h1>
        <div className={styles.verticalDiv2}></div>
        <div className={styles.row}>
          <ul className={styles.list}>
            {props.nodes &&
              props.nodes.map(node => (
                <li key={node.id} className={styles.listItem}>
                  <Job {...node} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Experience.defaultProps = {
  nodes: [],
  bio: ""
};

export default Experience;
