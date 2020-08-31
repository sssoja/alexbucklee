import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Experience from "../components/experience";
import Layout from "../containers/layout";
import { space, typography, flexbox, layout, grid } from "styled-system";
import styled from "styled-components";

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

const Grid = styled.div`
  height: 80vh;
  ${typography};
  ${flexbox};
  ${layout};
  ${grid};
`;

const Paragraph = styled.p`
  ${grid};
`;

const AboutPage = props => {
  const { data, errors } = props;
  const fontSizes = [0, 1, 2, 3];

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

// {props.bio && <p>{props.bio}</p>}
