import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import styled from "styled-components";
import { typography, flexbox } from "styled-system";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  ${typography};
  ${flexbox};
`;

const IndexPage = props => {
  const { data, errors } = props;
  const fontSizes = [3, 4, 5, 6];

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <Wrapper
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          fontSize={fontSizes}
        >
          <h1>WINDOW OF OPPORTUNITY </h1>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default IndexPage;
