import React, { Fragment } from "react";
import styled from "styled-components";
import { space } from "styled-system";

const Row = styled.div`
  ${space};
`;

function Job(props) {
  const clients = props.clients;
  if (clients.length === 0) {
    return (
      <Fragment>
        <div>
          <Row mb={[3, 4]}>
            {props.company && <p>{props.company}</p>}
            {props.role && <p>{props.role}</p>}
            {props.date && <p>{props.date}</p>}
          </Row>
          <p>In-house</p>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div>
        <Row mb={[3, 4]}>
          {props.company && <p>{props.company}</p>}
          {props.role && <p>{props.role}</p>}
          {props.date && <p>{props.date}</p>}
        </Row>

        <p>Clients include:</p>
        {clients &&
          clients.map(client => (
            <ul key={client}>
              <li>{client}</li>
            </ul>
          ))}
      </div>
    </Fragment>
  );
}

export default Job;
