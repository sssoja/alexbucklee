import React, { Fragment } from "react";
import styled from "styled-components";
import { space } from "styled-system";

const Row = styled.div`
  ${space};
`;

function Job(props) {
  return (
    <Fragment>
      <div>
        <Row mb={[3, 4]}>
          {props.company && <p>{props.company}</p>}
          {props.role && <p>{props.role}</p>}
          {props.date && <p>{props.date}</p>}
        </Row>

        <p>Clients include:</p>

        <ul>
          {props.clients &&
            props.clients.map(client => (
              <li key={props.id}>
                <li>{client}</li>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Job;
