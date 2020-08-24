import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";
import styles from "./project-preview-grid-design.module.css";

function ProjectPreviewGridDesign(props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGridDesign.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGridDesign;
