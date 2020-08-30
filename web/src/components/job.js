import React, { Fragment } from "react";
import styled from "styled-components";
import { space } from "styled-system";

const Div = styled.div`
  ${space};
`;

function Job(props) {
  return (
    <Fragment>
      <div>
        <Div mb={2}>
          {props.company && <p>{props.company}</p>}
          {props.role && <p>{props.role}</p>}
          {props.date && <p>{props.date}</p>}

          <p>Clients worked on include:</p>
        </Div>
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
