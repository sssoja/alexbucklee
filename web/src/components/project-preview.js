import React, { Fragment } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

function ProjectPreview(props) {
  return (
    <Fragment>
      <div>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3>{props.title}</h3>
      {props._rawExcerpt && (
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Fragment>
  );
}

export default ProjectPreview;
