import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'antd';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import IndicatorContent from '../components/indicator-content';
import DecisionTree from '../components/decision-tree';
import BreadcrumbNavigation from '../components/breadcrumb-navigation';

const { Content } = Layout;

const DocumentationPage = ({ data: { documentationMatrixCsv: node } }) => (
  <Layout style={{ background: '#fff' }}>
    <PageHeader selected="documentation" />
    <Layout style={{ background: '#fff' }}>
      <Content style={{ padding: '0 24px', maxWidth: 992, margin: 'auto' }}>
        <div className={`decision-tree-page ${node.code} ${node.key}`}>
          <DecisionTree />
        </div>
        <br />
        <BreadcrumbNavigation node={node} />
        <br />
        <IndicatorContent node={node} />
      </Content>
      <PageFooter />
    </Layout>
  </Layout>
);

export const query = graphql`
  query($path: String!) {
    documentationMatrixCsv(path: { eq: $path }) {
      path
      key
      code
      breadcrumbPath1
      breadcrumbPath2
      breadcrumbPath3
      breadcrumbName1
      breadcrumbName2
      breadcrumbName3
      name
      indicator
      highReliability
      lowReliability
      description
      rational
      conceptualIndicator
      component
      subComponent
      mapped
      levelOfAnalysis
      sources
      timeliness
      tableHeader
      emergency
      alert
      warning
      stressed
      notTriggered
      reference
      link
      link2
    }
  }
`;

export default DocumentationPage;
