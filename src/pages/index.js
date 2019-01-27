import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'antd';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import DecisionTree from '../components/decision-tree';

const { Content } = Layout;

const DocumentationPage = ({
  data: {
    markdownRemark: { html },
  },
}) => (
  <Layout style={{ background: '#fff' }}>
    <PageHeader selected="home" />
    <Layout style={{ padding: '24px 0', background: '#fff' }}>
      <Content
        style={{
          padding: '0 24px',
          width: '100%',
          maxWidth: 1200,
          margin: 'auto',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1>Integrated Needs Tracking</h1>
        </div>
        <DecisionTree />
      </Content>
      <Content
        style={{ padding: '24px 24px 0 24px', maxWidth: 992, margin: 'auto' }}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Layout>
    <PageFooter />
  </Layout>
);

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;

export default DocumentationPage;
