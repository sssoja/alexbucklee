import React, { Fragment } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./project-preview-grid.module.css";
import BlockText from "./block-text";

function ProjectPreviewDesign(props) {
  const height = props.mainImage.asset.metadata.dimensions.height;
  const width = props.mainImage.asset.metadata.dimensions.width;
  const isLandscape = width > height;

  return (
    <Fragment>
      <div className={isLandscape ? styles.landscape : null}>
        <div className={styles.imgWrapper}>
          {props.mainImage && props.mainImage.asset && (
            <img src={imageUrlFor(buildImageObj(props.mainImage))} alt={props.mainImage.alt} />
          )}
          <div className={styles.overlayWrapper}>
            <h3>{props.title}</h3>
            {props._rawExcerpt && (
              <div>
                <BlockText blocks={props._rawExcerpt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectPreviewDesign;
