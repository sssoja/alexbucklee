import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import styled from "styled-components";
import { typography, flexbox, layout, grid } from "styled-system";

export const query = graphql`
  query AboutPageQuery {
    experience: sanityExperience(_id: { regex: "/(drafts.|)experience/" }) {
      company
      role
      date
      clients
    }
  }
`;

const TextWrapper = styled.div`
  ${typography};
  ${flexbox};
  ${layout};
  ${grid};
`;

const Column = styled.div`
  display: flex;
  ${flexbox};
`;

const Paragraph = styled.p`
  ${grid};
`;

const AboutPage = props => {
  const fontSizes = [0, 1, 2, 3];

  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const experience = (data || {}).experience;
  // const clients = data.experience.clients;

  return (
    <Layout>
      <Container>
        <TextWrapper
          fontSize={fontSizes}
          lineHeight={1.5}
          textAlign="justify"
          gridTemplateColumns="20% 1fr, 1fr "
          gridTemplateRows="repeat(2, 1fr)"
          gridColumnGap={[4, null, null, 6]}
          gridRowGap={4}
          display={["flex", "grid"]}
          flexDirection="column"
        >
          <h1>Bio</h1>
          <Paragraph gridColumn="2/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
          <h1>Experience</h1>
          <Column flexDirection="column">
            {/* <Paragraph>{experience.company}</Paragraph> */}
            {/* <Paragraph>{experience.role}</Paragraph>
            <Paragraph> {experience.date}</Paragraph> */}
            <p>Clients worked on include:</p>
            {/* <ul>
              {clients &&
                clients.map(client => (
                  <li key={name}>
                    <li>{client}</li>
                  </li>
                ))}
            </ul> */}
          </Column>
          <Column flexDirection="column">
            <Paragraph>WCRS</Paragraph>
            <Paragraph>Digital Designer</Paragraph>
            <Paragraph>2015 - 2016</Paragraph>

            <ul>
              <li>
                Clients worked on include:
                <li>- Apple</li>
              </li>
            </ul>
          </Column>
        </TextWrapper>
      </Container>
    </Layout>
  );
};

AboutPage.defaultProps = {
  clients: []
};

export default AboutPage;
