import React from "react";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import ProjectPreviewGrid from "../components/project-preview-grid";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";

import { Link, graphql } from "gatsby";

export const query = graphql`
  query ArtPageQuery {
    projects: allSanityArt(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
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
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
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
        <h1>Art Works</h1>

        {projectNodes && (
          <ProjectPreviewGrid
            title="Latest projects"
            nodes={projectNodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default ArtworkPage;
