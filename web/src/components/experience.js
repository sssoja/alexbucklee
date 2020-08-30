import React from "react";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import Job from "./job";

const Grid = styled.div`
  height: 80vh;
  ${typography};
  ${flexbox};
  ${layout};
  ${grid};
`;

const Column = styled.div`
  display: flex;
  ${flexbox};
`;

function Experience(props) {
  const fontSizes = [0, 1, 2, 3];
  return (
    <Grid
      fontSize={fontSizes}
      lineHeight={1.5}
      textAlign="justify"
      gridTemplateColumns="20% 1fr, 1fr "
      gridTemplateRows="repeat(2, 1fr)"
      gridColumnGap={[4, null, null, 6]}
      gridRowGap={4}
      display={["flex", "grid"]}
      flexDirection="column"
    >
      <h1>Bio</h1>
      <h1>Experience</h1>
      <Column flexDirection="column">
        {" "}
        <ul>
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id}>
                <Job {...node} />
              </li>
            ))}
        </ul>{" "}
      </Column>
    </Grid>
  );
}

Experience.defaultProps = {
  nodes: []
};

export default Experience;
