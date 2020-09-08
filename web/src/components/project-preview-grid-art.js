import React from "react";
import styles from "./project-preview-grid.module.css";
import styled from "styled-components";
import { space, layout, grid } from "styled-system";
import ProjectPreviewArt from "./project-preview-art";

const GridWrapper = styled.div`
  height: 80vh;
  ${layout};
  ${grid};
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

function ProjectPreviewGridArt(props) {
  return (
    <GridWrapper gridTemplateColumns="15%" display={["flex", "grid"]} className={styles.grid}>
      <Column gridColumn={1} mt={4}>
        {props.title && <Row>{props.title}</Row>}
      </Column>

      <Row gridColumn={2} className={styles.scroll} mt={4}>
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

      <Row gridColumn="1/3" mt={4}>
        <h4>
          Purchase{" "}
          <a
            href="https://fiftypoundland.bigcartel.com/products"
            target="_blank"
            style={{ textDecoration: "underline" }}
            rel="noopener noreferrer"
          >
            here.
          </a>
        </h4>{" "}
      </Row>
    </GridWrapper>
  );
}

ProjectPreviewGridArt.defaultProps = {
  title: "",
  nodes: []
};

export default ProjectPreviewGridArt;
