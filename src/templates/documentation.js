import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'antd';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import IndicatorContent from '../components/indicator-content';
import DecisionTree from '../components/decision-tree';
import BreadcrumbNavigation from '../components/breadcrumb-navigation';

const { Content } = Layout;

const DocumentationPage = ({
  data: {
    documentationMatrixCsv: node,
    markdownRemark: { html },
  },
}) => (
  <Layout style={{ background: '#fff' }}>
    <PageHeader selected="documentation" />
    <Layout style={{ background: '#fff' }}>
      <Content
        style={{
          padding: '0 24px',
          maxWidth: 992,
          width: '100%',
          margin: 'auto',
        }}
      >
        <div
          className={`decision-tree-page ${node.className1} ${
            node.className1
          }-${node.className2}`}
        >
          <DecisionTree />
        </div>
        <br />
        <BreadcrumbNavigation node={node} />
        <br />
        <IndicatorContent html={html} node={node} />
      </Content>
      <PageFooter />
    </Layout>
  </Layout>
);

export const query = graphql`
  query($path: String!) {
    documentationMatrixCsv(path: { eq: $path }) {
      path
      className1
      className2
      breadcrumbPath1
      breadcrumbPath2
      breadcrumbPath3
      breadcrumbName1
      breadcrumbName2
      breadcrumbName3
      name
      title
      reliability
      levelOfAnalysis
      sources
      timeliness
      tableHeader
      emergency
      alert
      warning
      stressed
      notTriggered
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;

export default DocumentationPage;
