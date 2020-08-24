import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";
import styles from "./project-preview-grid-art.module.css";
import styled from "styled-components";
import { space, typography, flexbox, layout, grid } from "styled-system";

const GridWrapper = styled.div`
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
      gridTemplateRows="repeat(2, 1fr)"
      display={["flex", "grid"]}
      flexDirection="column"
      fontSize={fontSizes}
    >
      <Column gridRow={1} gridColumn={1} display="flex" flexDirection="column">
        {props.title && <h2>{props.title}</h2>}
        {props.subtitle && <h3>{props.subtitle}</h3>}
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
        <h4>Represented by:</h4>{" "}
      </Row>
      <Row gridRow={2} gridColumn={2}>
        <h4>Atom Gallery, The Art Hound Gallery, Subversion Gallery</h4>{" "}
      </Row>
    </GridWrapper>
  );
}

ProjectPreviewGridArt.defaultProps = {
  title: "",
  subtitle: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGridArt;
