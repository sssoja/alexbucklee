import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGridArt from "../components/project-preview-grid-art";
import Layout from "../containers/layout";

export const query = graphql`
  query ArtPageQuery {
    projects: allSanityArt(
      limit: 100
      sort: { fields: [publishedAt], order: ASC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArtworkPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Container>
        <GraphQLErrorList errors={errors} />
      </Container>
    );
  }

  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout>
      <Container>
        {projectNodes && <ProjectPreviewGridArt title="Art works" nodes={projectNodes} />}
      </Container>
    </Layout>
  );
};

export default ArtworkPage;
