import React, { Fragment } from "react";
import styles from "./about.module.css";

function Job(props) {
  const clients = props.clients;
  if (clients.length === 0) {
    return (
      <Fragment>
        <div className={styles.job}>
          {props.company && <p>{props.company}</p>}
          {props.role && <p>{props.role}</p>}
          {props.date && <p>{props.date}</p>}
        </div>
        <p>In-house</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className={styles.job}>
        {props.company && <p>{props.company}</p>}
        {props.role && <p>{props.role}</p>}
        {props.date && <p>{props.date}</p>}
      </div>
      <p> Clients include:</p>
      {clients &&
        clients.map(client => (
          <ul key={client}>
            <li>{client}</li>
          </ul>
        ))}
    </Fragment>
  );
}

export default Job;
