import React from 'react';
import { Layout, Row, Col } from 'antd';

import LoginContent from '../components/login-content';
import styles from '../styles/login.module.css';

const { Content } = Layout;

const LoginPage = () => (
  <Layout className={styles.layout}>
    <Content className={styles.fullHeight}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        className={styles.fullHeight}
      >
        <Col xxl={4} xl={6} md={8} sm={12} xs={22}>
          <LoginContent />
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default LoginPage;
