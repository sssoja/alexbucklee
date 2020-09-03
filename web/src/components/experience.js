import React from "react";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import Job from "./job";

const Grid = styled.div`
  ${typography};
  ${flexbox};
  ${layout};
  ${grid};
  ${space};
  height: 80vh;
`;

const Column = styled.div`
  display: flex;
  ${flexbox};
  ${layout};
  ${space};
  ${grid};
`;

const Row = styled.div`
  display: flex;
  ${flexbox};
  ${grid};
  ${space};
`;

const List = styled.ul`
  display: flex;
  ${typography};
  ${layout};
  ${flexbox};
  ${grid};
  ${space};
`;

const ListItem = styled.li`
  ${layout};
  ${space};
  ${flexbox};
`;

function Experience(props) {
  return (
    <Grid
      fontSize={[2, 3]}
      lineHeight={1.5}
      textAlign="justify"
      gridTemplateColumns="10% 80% "
      gridTemplateRows="repeat(2, 1fr)"
      gridColumnGap={[4, null, null, 6]}
      gridRowGap={4}
      display={["flex", "grid"]}
      flexDirection="column"
    >
      {" "}
      <Column mt={4}>
        <h1>Bio</h1>
      </Column>
      <Row flexDirection="row" gridColumn="2/3" ml={[0, 4]} mt={4}>
        {" "}
        {props.bio && <p>{props.bio}</p>}
      </Row>
      <Column mr={4}>
        <h1>Experience</h1>
      </Column>
      <Row flexDirection="row" gridColumn="2/3" ml={[0, 4]}>
        <List flexDirection={["column", "row"]} textAlign="left">
          {" "}
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
