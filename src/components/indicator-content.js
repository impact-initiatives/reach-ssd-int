import React from 'react';
import { Table } from 'antd';

const IndicatorContent = ({ node }) => (
  <div>
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
