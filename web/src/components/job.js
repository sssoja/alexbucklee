import React, { Fragment } from "react";

function Job(props) {
  return (
    <Fragment>
      <div>
        {props.company && <p>{props.company}</p>}
        {props.role && <p>{props.role}</p>}
        {props.date && <p>{props.date}</p>}
        <p>Clients worked on include:</p>

        <ul>
          {props.clients &&
            props.clients.map(client => (
              <li key={name}>
                <li>{client}</li>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Job;
