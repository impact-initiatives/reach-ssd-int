import React from 'react';
import { Table, Row, Col } from 'antd';

const IndicatorContent = ({ html, node }) => (
  <div>
    <h1>{node.name}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <h2>Classification</h2>
    <p>One of the following requirements must be met in order to classify:</p>
    <Row>
      <Col md={12}>
        <h3>High Reliability</h3>
        {node.requirementHigh ? (
          <ul>
            {node.requirementHigh.split(';').map((n, index) => (
              <li key={index}>{n}</li>
            ))}
          </ul>
        ) : null}
      </Col>
      <Col md={12}>
        <h3>Low Reliability</h3>
        {node.requirementLow ? (
          <ul>
            {node.requirementLow.split(';').map((n, index) => (
              <li key={index}>{n}</li>
            ))}
          </ul>
        ) : null}
      </Col>
    </Row>
    <h2>Thresholds</h2>
    <Table
      dataSource={[
        {
          key: 'Emergency',
          valueHigh: node.emergencyHigh,
          valueLow: node.emergencyLow,
        },
        {
          key: 'Alert',
          valueHigh: node.alertHigh,
          valueLow: node.alertLow,
        },
        {
          key: 'Warning',
          valueHigh: node.warningHigh,
          valueLow: node.warningLow,
        },
        {
          key: 'Stressed',
          valueHigh: node.stressedHigh,
          valueLow: node.stressedLow,
        },
        {
          key: 'Not Triggered',
          valueHigh: node.notTriggeredHigh,
          valueLow: node.notTriggeredLow,
        },
      ]}
      columns={[
        { title: 'Classification', dataIndex: 'key', key: 'key' },
        {
          title: 'High Reliability',
          dataIndex: 'valueHigh',
          key: 'valueHigh',
          render: text => (
            <ul>
              {text.split(';').map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          ),
        },
        {
          title: 'Low Reliability',
          dataIndex: 'valueLow',
          key: 'valueLow',
          render: text => (
            <ul>
              {text.split(';').map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          ),
        },
      ]}
      pagination={false}
    />
  </div>
);

export default IndicatorContent;
