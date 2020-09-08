import React from "react";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import styled from "styled-components";
import { space, typography, layout, grid } from "styled-system";
import styles from "../components/contact.module.css";

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
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>Let's chat...</h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <p>Email </p>
              <p>Mobile</p>
              <p>Instagram</p>
            </div>

            <div className={styles.column}>
              <p>
                <a href="mailto:alexbucklee@gmail.com" target="_blank" rel="noopener noreferrer">
                  abuckleeuk@gmail.com
                </a>
              </p>
              <p>+44 7768 619 885</p>
              <p>
                <a
                  href="https://www.instagram.com/alexbucklee/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @alexbucklee
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
