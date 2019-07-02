import React from 'react';
import { graphql } from 'gatsby';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import GroupingContent from '../components/grouping-content';
import IntDiagram from '../images/int-diagram';
import BreadcrumbNavigation from '../components/breadcrumb-navigation';

const DocumentationPage = ({
  data: {
    groupingMatrixCsv: node,
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
        <div className="container is-tablet">
          <br />
          <BreadcrumbNavigation node={node} />
          <br />
          <GroupingContent html={html} node={node} />
        </div>
      </div>
    </section>
    <PageFooter />
  </div>
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;

export default DocumentationPage;
