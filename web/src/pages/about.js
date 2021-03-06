import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Experience from "../components/experience";
import Layout from "../containers/layout";

export const query = graphql`
  query AboutPageQuery {
    bio: sanityBio {
      bio
    }
    experience: allSanityExperience {
      edges {
        node {
          company
          role
          clients
          id
          date
        }
      }
    }
  }
`;

const AboutPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const experiences = (data || {}).experience ? mapEdgesToNodes(data.experience) : [];
  const bio = (data || {}).bio;

  return (
    <Layout>
      <Container>{experiences && <Experience bio={bio.bio} nodes={experiences} />}</Container>
    </Layout>
  );
};

export default AboutPage;
