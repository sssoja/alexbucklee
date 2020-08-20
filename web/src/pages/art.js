import React from "react";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";

const ArtworkPage = props => {
  const { errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <h1>Art Works</h1>
      </Container>
    </Layout>
  );
};

export default ArtworkPage;
