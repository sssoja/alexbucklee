import React from "react";
import styles from "./project-preview-grid.module.css";
import styled from "styled-components";
import { space, layout, grid, flexbox } from "styled-system";
import ProjectPreviewDesign from "./project-preview-design";
import { Link } from "gatsby";

const GridWrapper = styled.div`
  height: 80vh;
  ${layout};
  ${grid};
  ${flexbox}
`;

const Column = styled.div`
  ${grid};
  ${space};
`;

const Row = styled.div`
  ${grid};
  ${space};
  ${layout};
`;

function ProjectPreviewGridDesign(props) {
  return (
    <GridWrapper
      gridTemplateColumns="15%"
      display={["flex", "flex", "grid", "grid"]}
      flexDirection="column"
    >
      <Column gridColumn={1} mt={4} mr={4}>
        {props.title && <Row>{props.title}</Row>}
      </Column>

      <Row gridColumn={2} mt={4} className={styles.scroll}>
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

      <Row gridColumn="1/3" mt={4}>
        <Link to="/contact/">Discuss a project.</Link>
      </Row>
    </GridWrapper>
  );
}

ProjectPreviewGridDesign.defaultProps = {
  title: "",
  nodes: []
};

export default ProjectPreviewGridDesign;
