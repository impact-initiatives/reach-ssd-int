import React from 'react';
import { Radio } from 'antd';
import { connect } from 'react-redux';

import LowReliability from './decision-tree-low-reliability';
import HighReliability from './decision-tree-high-reliability';
import '../styles/decision-tree.css';

const { Group: RadioGroup, Button: RadioButton } = Radio;

const mapStateToProps = ({ reliability }) => {
  return { reliability };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchHigh: () => dispatch({ type: 'HIGH_RELIABILITY' }),
    dispatchLow: () => dispatch({ type: 'LOW_RELIABILITY' }),
  };
};

const DecisionTree = ({ reliability, dispatchHigh, dispatchLow }) => (
  <div style={{ textAlign: 'right' }}>
    Reliability Tree:&nbsp;&nbsp;
    <RadioGroup value={reliability} style={{ marginBottom: 16 }}>
      <RadioButton onChange={dispatchHigh} value="high">
        High
      </RadioButton>
      <RadioButton onChange={dispatchLow} value="low">
        Low
      </RadioButton>
    </RadioGroup>
    <div>
      {reliability === 'high' ? <HighReliability /> : <LowReliability />}
    </div>
  </div>
);

const ConnectedDecisionTree = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DecisionTree);

export default ConnectedDecisionTree;
