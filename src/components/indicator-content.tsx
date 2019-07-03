import React from 'react';

const IndicatorContent = ({ html, node }) => (
  <div className="content">
    <h1>{node.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <h2>Metadata</h2>
    <ul>
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
    </ul>
    <h2>Thresholds</h2>
    <table className="table is-striped is-hoverable">
      <thead>
        <tr>
          <th>Risk of NAWG Trigger Present</th>
          <th>{node.tableHeader}</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>Confirmed</td>
          <td>{node.emergency}</td>
        </tr> */}
        <tr>
          <td>Very High</td>
          <td>{node.alert}</td>
        </tr>
        <tr>
          <td>High</td>
          <td>{node.warning}</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>{node.stressed}</td>
        </tr>
        <tr>
          <td>Low</td>
          <td>{node.notTriggered}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default IndicatorContent;
