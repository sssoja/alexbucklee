import React from "react";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import Job from "./job";

const Wrapper = styled.div`
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
  return (
    <Wrapper
      fontSize={[2, 3]}
      lineHeight={1.5}
      textAlign="justify"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignitems="center"
    >
      <Row flexDirection={["column", "row"]} pb={[2, 4]} mr={[0, 4]}>
        <Column width={600} mr={4} mb={2}>
          <h1>Bio</h1>
        </Column>
        {props.bio && <p>{props.bio}</p>}
      </Row>
      <Row flexDirection={["column", "row"]} pt={4} mr={[0, 7]}>
        <Column width={150} mr={4} mb={2}>
          <h1>Experience</h1>
        </Column>
        <Row>
          <List flexDirection={["column", "row"]} textAlign="left">
            {props.nodes &&
              props.nodes.map(node => (
                <ListItem key={node.id} minWidth="fit-content" mr={6} mb={4}>
                  <Job {...node} />
                </ListItem>
              ))}
          </List>
        </Row>
      </Row>
    </Wrapper>
  );
}

Experience.defaultProps = {
  nodes: [],
  bio: ""
};

export default Experience;
