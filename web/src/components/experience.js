import React from "react";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import Job from "./job";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  ${typography};
  ${layout};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  ${flexbox};
  ${space};
`;

const Margin = styled.div`
  ${space};
`;

const List = styled.ul`
  display: flex;
  ${typography};
  ${flexbox};
  ${layout};
`;

const ListItem = styled.li`
  ${layout};
  ${space};
`;

function Experience(props) {
  const fontSizes = [2, 3];
  return (
    <Wrapper fontSize={fontSizes} lineHeight={1.5} textAlign="justify">
      <Column>
        <Row flexDirection={["column", "row"]} mb={[6, 4, 4, 4]}>
          <Margin mb={2} mr="5em">
            <h1>Bio</h1>
          </Margin>
          <Row flexDirection="row"> {props.bio && <p>{props.bio}</p>}</Row>
        </Row>
        <Row flexDirection={["column", "row"]} mt={[6, 4, 4, 4]}>
          <Margin mb={2} mr={4}>
            <h1>Experience</h1>
          </Margin>
          <Row>
            <List flexDirection={["column", null, null, "row"]} textAlign="left">
              {props.nodes &&
                props.nodes.map(node => (
                  <ListItem key={node.id} minWidth="fit-content" mr={6} mb={3}>
                    <Job {...node} />
                  </ListItem>
                ))}
            </List>
          </Row>
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
