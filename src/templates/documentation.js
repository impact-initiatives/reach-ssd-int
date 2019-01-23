import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Table } from 'antd';

import DocumentationSider from '../components/documentation-sider';
import PageHeader from '../components/page-header';

const { Content, Footer } = Layout;

const DocumentationPage = ({ data: { documentationMatrixCsv: node } }) => (
  <Layout style={{ background: '#fff' }}>
    <PageHeader selected="documentation" />
    <Layout style={{ padding: '24px 0', background: '#fff' }}>
      <DocumentationSider node={node} />
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <h1>{node.indicator}</h1>
        <h2>Description</h2>
        <p>{node.description}</p>
        <h2>Rationale for inclusion in the INT</h2>
        <p>{node.rational}</p>
        <h2>Metadata</h2>
        <p>
          <b>Reliability Tree High: </b>
          {node.highReliability}
        </p>
        <p>
          <b>Reliability Tree Low: </b>
          {node.lowReliability}
        </p>
        <p>
          <b>Conceptual Indicator: </b>
          {node.conceptualIndicator}
        </p>
        <p>
          <b>Component: </b>
          {node.component}
        </p>
        <p>
          <b>Sub-component: </b>
          {node.subComponent}
        </p>
        <p>
          <b>Mapped: </b>
          {node.mapped}
        </p>
        <p>
          <b>Level of analysis: </b>
          {node.levelOfAnalysis}
        </p>
        <p>
          <b>Sources of data: </b>
          {node.sources}
        </p>
        <p>
          <b>Timeliness of data: </b>
          {node.timeliness}
        </p>
        <h2>Thresholds</h2>
        <Table
          dataSource={[
            { key: 'Emergency', value: node.emergency },
            { key: 'Alert', value: node.alert },
            { key: 'Warning', value: node.warning },
            { key: 'Stressed', value: node.stressed },
            { key: 'Not Triggered', value: node.notTriggered },
          ]}
          columns={[
            { title: 'Classification', dataIndex: 'key', key: 'key' },
            { title: node.tableHeader, dataIndex: 'value', key: 'value' },
          ]}
          pagination={false}
        />
      </Content>
    </Layout>
    <Footer style={{ textAlign: 'center', background: '#fff' }}>
      Created by REACH Initiative
    </Footer>
  </Layout>
);

export const query = graphql`
  query($path: String!) {
    documentationMatrixCsv(path: { eq: $path }) {
      path
      key
      menu
      code
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
