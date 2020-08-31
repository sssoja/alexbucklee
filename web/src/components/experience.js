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

const Row = styled.div`
  display: flex;
  ${flexbox};
  ${grid};
`;

const List = styled.ul`
  display: flex;
  ${typography};
  ${layout};
  ${flexbox};
  ${grid};
`;

const ListItem = styled.li`
  ${layout};
  ${space};
  ${flexbox};
`;

const Paragraph = styled.p`
  ${grid};
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
      <Row flexDirection="row" gridColumn="2/4">
        {" "}
        {props.bio && <p>{props.bio}</p>}
      </Row>
      <h1>Experience</h1>
      <Row flexDirection="row" gridColumn="2/4">
        <List flexDirection={["column", "row"]} textAlign="left">
          {props.nodes &&
            props.nodes.map(node => (
              <ListItem key={node.id} minWidth="fit-content" mr={6} mb={4}>
                <Job {...node} />
              </ListItem>
            ))}
        </List>
      </Row>
    </Grid>
  );
}

Experience.defaultProps = {
  nodes: [],
  bio: ""
};

export default Experience;
