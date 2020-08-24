import React from "react";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import styled from "styled-components";
import { space, typography, layout, grid } from "styled-system";

const ListWrapper = styled.div`
  ${grid};
  ${layout};
  ${typography};
`;

const H1 = styled.h1`
  ${space};
  ${grid};
`;

const ContactInfo = styled.p`
  ${grid};
`;

const ContactPage = props => {
  const fontSizes = [0, 1, 2, 3];
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
        <ListWrapper
          display="grid"
          gridTemplateRows="1f, 1fr, 1fr, 1fr"
          gridRowGap={3}
          gridColumnGap={4}
          maxWidth="50%"
          fontSize={fontSizes}
        >
          <H1 gridRow={1} mt={4}>
            Let's chat...
          </H1>
          <ContactInfo gridRow={2}>Email </ContactInfo>
          <ContactInfo gridRow={2}>
            <a href="mailto:alexbucklee@gmail.com" target="_blank">
              alexbucklee@gmail.com
            </a>
          </ContactInfo>
          <ContactInfo gridRow={3}>Mobile</ContactInfo>
          <ContactInfo gridRow={3}>+44 7768 619 885</ContactInfo>
          <ContactInfo gridRow={4}>Instagram</ContactInfo>
          <ContactInfo gridRow={4}>@alexbucklee</ContactInfo>
        </ListWrapper>
      </Container>
    </Layout>
  );
};

export default ContactPage;
