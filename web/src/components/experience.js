import React from "react";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import Job from "./job";

const Grid = styled.div`
  height: 100vh;
  ${typography};
  ${flexbox};
  ${layout};
  ${grid};
`;

const Column = styled.div`
  display: flex;
  ${flexbox};
  ${layout};
  ${space};
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
`;

const ListItem = styled.li`
  ${layout};
  ${space};
  ${flexbox};
`;

function Experience(props) {
  const fontSizes = [2, 2, 2, 3];
  return (
    <Grid fontSize={fontSizes} lineHeight={1.5} textAlign="justify" display="flex">
      <Column flexDirection="column">
        <Row flexDirection={["column", "row"]} pb={[2, 4]}>
          <Column pb={2} mr={4}>
            <h1>Bio</h1>
          </Column>
          <Row flexDirection="row"> {props.bio && <p>{props.bio}</p>}</Row>
        </Row>
        <Row flexDirection={["column", "row"]} pt={4}>
          <Column pb={2} mr={4}>
            <h1>Experience</h1>
          </Column>
          <Row>
            <List flexDirection={["column", "row"]} textAlign="left" flexFlow="wrap">
              {props.nodes &&
                props.nodes.map(node => (
                  <ListItem key={node.id} minWidth="fit-content" mr={6} mb={4}>
                    <Job {...node} />
                  </ListItem>
                ))}
            </List>
          </Row>
        </Row>
      </Column>
    </Grid>
  );
}

Experience.defaultProps = {
  nodes: [],
  bio: ""
};

export default Experience;
