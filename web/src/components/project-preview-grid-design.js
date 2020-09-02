import React from "react";
import styles from "./project-preview-grid-design.module.css";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import ProjectPreviewDesign from "./project-preview-design";

const GridWrapper = styled.div`
  height: 80vh;
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
  const fontSizes = [2, 2, 2, 3];
  return (
    <GridWrapper
      gridTemplateColumns="20%"
      gridTemplateRows="90%"
      display={["flex", "grid"]}
      flexDirection="column"
      fontSize={fontSizes}
    >
      <Column gridColumn={1} display="flex" flexDirection="column" mr={4} mb={4}>
        {props.title && <h2>{props.title}</h2>}
      </Column>

      <Row gridColumn={2} pb={4} className={styles.scroll}>
        <Column className={styles.grid}>
          <Column className={styles.grid}>
            <ul>
              {props.nodes &&
                props.nodes.map(node => (
                  <li key={node.id} className={styles.listItem}>
                    <ProjectPreviewDesign {...node} />
                  </li>
                ))}
            </ul>
          </Column>
        </Column>
      </Row>
    </GridWrapper>
  );
}

ProjectPreviewGridDesign.defaultProps = {
  title: "",
  nodes: []
};

export default ProjectPreviewGridDesign;
