import React from 'react';
import { Table } from 'antd';

const IndicatorContent = ({ node }) => (
  <div>
    <h1>{node.title}</h1>
    <h2>Description</h2>
    <p>{node.description}</p>
    {node.options ? (
      <ol>
        {node.options.split(';').map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ol>
    ) : null}
    <h2>Rationale for inclusion in the INT</h2>
    <p>{node.rational}</p>
    <h2>Metadata</h2>
    <ul>
      <li>
        <b>Reliability Tree: </b>
        {node.reliability}
      </li>
      <li>
        <b>Conceptual Indicator: </b>
        {node.breadcrumbName1 || 'N/A'}
      </li>
      <li>
        <b>Component: </b>
        {node.breadcrumbName2 || 'N/A'}
      </li>
      <li>
        <b>Sub-Component: </b>
        {node.breadcrumbName3 || 'N/A'}
      </li>
      <li>
        <b>Level of analysis: </b>
        {node.levelOfAnalysis}
      </li>
      <li>
        <b>Timeliness of data: </b>
        {node.timeliness}
      </li>
      <li>
        <b>Sources of data: </b>
        {node.sources}
      </li>
      <li>
        <b>Reference: </b>
        <a href={node.link}>{node.reference}</a>
      </li>
    </ul>
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
        {
          title: node.tableHeader,
          dataIndex: 'value',
          key: 'value',
        },
      ]}
      pagination={false}
    />
  </div>
);

export default IndicatorContent;
