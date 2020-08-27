import React, { Fragment } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./project-preview-grid.module.css";
import BlockText from "./block-text";

function ProjectPreview(props) {
  return (
    <Fragment>
      <div className={styles.overlay}>
        {props.mainImage && props.mainImage.asset && (
          <img src={imageUrlFor(buildImageObj(props.mainImage))} alt={props.mainImage.alt} />
        )}
        <div className={styles.img}>
          <h3>{props.title}</h3>
          {props._rawExcerpt && (
            <div>
              <BlockText blocks={props._rawExcerpt} />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectPreview;
