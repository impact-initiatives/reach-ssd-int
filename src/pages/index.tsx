import React from 'react';
import { graphql } from 'gatsby';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import IntDiagram from '../images/int-diagram';

interface Props {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const DocumentationPage = ({
  data: {
    markdownRemark: { html },
  },
}: Props) => (
  <div>
    <PageHeader tab="/" />
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Integrated Needs Tracking</h1>
        <IntDiagram />
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
    <PageFooter />
  </div>
);

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;

export default DocumentationPage;
