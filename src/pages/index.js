import React from 'react';
import { Layout, Menu } from 'antd';

import DocumentationSider from '../components/documentation-sider';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

const DocumentationPage = () => (
  <Layout style={{ background: '#fff' }}>
    <Header style={{ background: '#fff' }}>
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['documentation']}
        style={{ lineHeight: '64px' }}
      >
        <Item key="documentation">Documentation</Item>
        <Item key="maps">Maps</Item>
        <Item key="about">About</Item>
      </Menu>
    </Header>
    <Layout style={{ padding: '24px 0', background: '#fff' }}>
      <DocumentationSider node={{}} />
      <Content style={{ padding: '0 24px', minHeight: 280 }} />
    </Layout>
    <Footer style={{ textAlign: 'center', background: '#fff' }}>
      Created by REACH Initiative
    </Footer>
  </Layout>
);

export default DocumentationPage;
