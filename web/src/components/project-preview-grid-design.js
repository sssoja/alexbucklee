import React from "react";
import ProjectPreview from "./project-preview";
import styles from "./project-preview-grid-design.module.css";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";

const GridWrapper = styled.div`
  height: 100vh;
  ${typography};
  ${flexbox};
  ${layout};
  ${grid};
`;

const Column = styled.div`
  ${grid};
  ${space};
  ${layout};
  ${flexbox};
`;

const Row = styled.div`
  ${grid};
  ${space};
  ${layout};
  ${flexbox};
`;

function ProjectPreviewGridDesign(props) {
  const fontSizes = [0, 1, 2, 3];
  return (
    <GridWrapper
      gridTemplateColumns="20%"
      gridTemplateRows="repeat(2, 1fr)"
      display={["flex", "grid"]}
      flexDirection="column"
      fontSize={fontSizes}
    >
      <Column gridRow={1} gridColumn={1} display="flex" flexDirection="column">
        {props.title && <h2>{props.title}</h2>}
      </Column>
      <Column gridRow={1} gridColumn={2} pb={4}>
        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id}>
                <ProjectPreview {...node} />
              </li>
            ))}
        </ul>
      </Column>
      <Row gridRow={2} gridColumn={1}>
        <h4>Employer:</h4>{" "}
      </Row>
      <Row gridRow={2} gridColumn={2}>
        <h4>Freelance, Fearlessly Frank</h4>{" "}
      </Row>
    </GridWrapper>
  );
}

ProjectPreviewGridDesign.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGridDesign;
