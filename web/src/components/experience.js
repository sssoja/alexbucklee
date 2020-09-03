import React from "react";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import Job from "./job";

const Wrapper = styled.div`
  ${typography};
  ${flexbox};
  ${layout};
  ${grid};
  ${space};
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
    <Wrapper fontSize={[2, 3]} lineHeight={1.5} textAlign="justify" flexDirection="column">
      {" "}
      <Column mt={4}>
        <Column width="20%">
          <h1>Bio</h1>
        </Column>
        <Row> {props.bio && <p>{props.bio}</p>}</Row>
      </Column>
      <Column>
        <Column width="20%">
          <h1>Experience</h1>
        </Column>
        <Row>
          <List textAlign="left">
            {" "}
            {props.nodes &&
              props.nodes.map(node => (
                <ListItem key={props.company} minWidth="fit-content" mr={6} mb={4}>
                  <Job {...node} />
                </ListItem>
              ))}
          </List>
        </Row>
      </Column>
    </Wrapper>
  );
}

Experience.defaultProps = {
  nodes: [],
  bio: ""
};

export default Experience;
