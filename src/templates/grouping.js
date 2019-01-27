import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'antd';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import GroupingContent from '../components/grouping-content';
import DecisionTree from '../components/decision-tree';
import BreadcrumbNavigation from '../components/breadcrumb-navigation';

const { Content } = Layout;

const DocumentationPage = ({ data: { groupingMatrixCsv: node } }) => (
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
        <GroupingContent node={node} />
      </Content>
      <PageFooter />
    </Layout>
  </Layout>
);

export const query = graphql`
  query($path: String!) {
    groupingMatrixCsv(path: { eq: $path }) {
      path
      className1
      className2
      breadcrumbPath1
      breadcrumbPath2
      breadcrumbName1
      breadcrumbName2
      breadcrumbName3
      name
      title
      reliability
      description
      requirementHigh
      requirementLow
      emergencyHigh
      emergencyLow
      alertHigh
      alertLow
      warningHigh
      warningLow
      stressedHigh
      stressedLow
      notTriggeredHigh
      notTriggeredLow
    }
  }
`;

export default DocumentationPage;
