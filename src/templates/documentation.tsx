import React from 'react';
import { graphql } from 'gatsby';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import IndicatorContent from '../components/indicator-content';
import IntDiagram from '../images/int-diagram';
import BreadcrumbNavigation from '../components/breadcrumb-navigation';

const DocumentationPage = ({
  data: {
    documentationMatrixCsv: node,
    markdownRemark: { html },
  },
}) => (
  <div>
    <PageHeader tab="/documentation" />
    <section className="section">
      <div className="container">
        <div
          className={`decision-tree-page ${node.className1} ${node.className1}-${node.className2}`}
        >
          <IntDiagram />
        </div>
        <br />
        <BreadcrumbNavigation node={node} />
        <br />
        <IndicatorContent html={html} node={node} />
      </div>
    </section>
    <PageFooter />
  </div>
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