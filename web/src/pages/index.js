import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import styled from "styled-components";
import { typography, flexbox, position, layout, space } from "styled-system";
import styles from "../components/index.module.css";
import gif from "../components/assets/works.gif";

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
  ${typography};
  ${flexbox};
  ${position};
  ${layout};
  ${space};
`;

const Gif = styled.div`
  ${flexbox};
  ${position};
  ${layout};
  ${space};
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
          fontSize={fontSizes}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <h1 className={styles.h1}>WINDOW OF OPPORTUNITY</h1>
          <Gif className={styles.gif}>
            <img src={gif} />
          </Gif>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default IndexPage;
