import React, { Component } from 'react';
import { isLoggedIn } from './auth';
import LoginPage from '../templates/login';

import styles from '../styles/is-logged-in.module.css';

class IsLoggedIn extends Component {
  state = {};

  componentDidMount() {
    this.setState({ isLoggedIn: isLoggedIn() });
  }

  renderSwitch(element) {
    switch (this.state.isLoggedIn) {
      case true:
        return element;
      case false:
        return <LoginPage />;
      default:
        return <div />;
    }
  }

  render() {
    const { element } = this.props;
    return (
      <div className={styles.fullHeight}>{this.renderSwitch(element)}</div>
    );
  }
}

export default IsLoggedIn;
