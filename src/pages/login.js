import React from 'react';
import { Layout, Row, Col } from 'antd';

import LoginContent from '../components/login-content';

const { Content } = Layout;

const LoginPage = () => (
  <Layout style={{ background: '#fff' }}>
    <Content>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: window.innerHeight }}
      >
        <Col xxl={4} xl={6} md={8} sm={12} xs={22}>
          <LoginContent />
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default LoginPage;
