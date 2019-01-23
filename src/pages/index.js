import React from 'react';
import { Layout, Menu } from 'antd';

import PageHeader from '../components/page-header';
import DocumentationSider from '../components/documentation-sider';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

const DocumentationPage = () => (
  <Layout style={{ background: '#fff' }}>
    <PageHeader selected="documentation" />
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
