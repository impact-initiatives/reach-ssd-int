import React from 'react';

const IndicatorContent = ({ html, node }) => (
  <div className="content">
    <h1>{node.name}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <h2>Classification</h2>
    <p>One of the following requirements must be met in order to classify:</p>
    {node.requirementLow ? (
      <ul>
        {node.requirementLow.split(';').map((n, index) => (
          <li key={index}>{n}</li>
        ))}
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
              {node.emergencyLow.split(';').map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td>Very High</td>
          <td>
            <ul>
              {node.alertLow.split(';').map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td>High</td>
          <td>
            <ul>
              {node.warningLow.split(';').map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>
            <ul>
              {node.stressedLow.split(';').map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td>Low</td>
          <td>
            <ul>
              {node.notTriggeredLow.split(';').map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default IndicatorContent;
