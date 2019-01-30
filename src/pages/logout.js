import React from 'react';
import { Button, Layout, Row } from 'antd';

import { logout } from '../utils/auth';
import styles from '../styles/logout.module.css';

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
        <Button type="danger" onClick={logout}>
          Log out
        </Button>
      </Row>
    </Content>
  </Layout>
);

export default LoginPage;
