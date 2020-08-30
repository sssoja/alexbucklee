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
      <Paragraph gridColumn="2/4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Paragraph>
      <h1>Experience</h1>
      <Column flexDirection="column">
        <List flexDirection={["column", "row"]} textAlign="left">
          {props.nodes &&
            props.nodes.map(node => (
              <ListItem key={node.id} minWidth="fit-content" mr={6} mb={4}>
                <Job {...node} />
              </ListItem>
            ))}
        </List>
      </Column>
    </Grid>
  );
}

Experience.defaultProps = {
  nodes: []
};

export default Experience;
