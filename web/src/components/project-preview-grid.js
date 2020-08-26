import { Link } from "gatsby";
import React from "react";
import ProjectPreviewArt from "./project-preview-art";

function ProjectPreviewGrid(props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreviewArt {...node} />
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

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
