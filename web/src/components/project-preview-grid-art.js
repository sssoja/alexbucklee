import React from "react";
import styles from "./project-preview-grid-art.module.css";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";
import ProjectPreviewArt from "./project-preview-art";

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

function ProjectPreviewGridArt(props) {
  const fontSizes = [0, 1, 2, 3];
  return (
    <GridWrapper
      gridTemplateColumns="20%"
      gridTemplateRows="90%"
      display={["flex", "grid"]}
      flexDirection="column"
      fontSize={fontSizes}
    >
      <Column gridColumn={1} display="flex" flexDirection="column" mr={4}>
        {props.title && <h2>{props.title}</h2>}
        {props.subtitle && <h3>{props.subtitle}</h3>}
      </Column>

      <Row gridColumn={2} pb={4} className={styles.scroll}>
        <Column className={styles.grid}>
          <Column className={styles.grid}>
            <ul>
              {props.nodes &&
                props.nodes.map(node => (
                  <li key={node.id} className={styles.listItem}>
                    <ProjectPreviewArt {...node} />
                  </li>
                ))}
            </ul>
          </Column>
        </Column>
      </Row>

      <Row display="contents">
        <Row gridColumn={1}>
          <h4>Represented by:</h4>{" "}
        </Row>
        <Row gridColumn={2}>
          <h4>Atom Gallery, The Art Hound Gallery, Subversion Gallery</h4>{" "}
        </Row>
      </Row>
    </GridWrapper>
  );
}

ProjectPreviewGridArt.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGridArt;
