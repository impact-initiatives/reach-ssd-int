import React from 'react';

const IndicatorContent = ({ html, node }) => {
  const isIndicator = node.levelOfAnalysis && node.sources && node.timeliness;
  return (
    <div className="content">
      <h1>{node.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {isIndicator ? <h2>Metadata</h2> : null}
      {isIndicator ? (
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
      ) : null}
      <h2>Thresholds</h2>
      <table className="table is-striped is-hoverable">
        <thead>
          <tr>
            <th>Risk of NAWG Trigger Present</th>
            <th>{node.tableHeader}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Confirmed</td>
            <td>
              <ul>
                {node.level5.split(';').map((n, index) => (
                  <li key={index}>{n}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Very High</td>
            <td>
              <ul>
                {node.level4.split(';').map((n, index) => (
                  <li key={index}>{n}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>High</td>
            <td>
              <ul>
                {node.level3.split(';').map((n, index) => (
                  <li key={index}>{n}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>
              <ul>
                {node.level2.split(';').map((n, index) => (
                  <li key={index}>{n}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Low</td>
            <td>
              <ul>
                {node.level1.split(';').map((n, index) => (
                  <li key={index}>{n}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IndicatorContent;
