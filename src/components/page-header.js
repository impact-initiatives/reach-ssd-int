import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { Item } = Menu;

const PageHeader = ({ selected }) => (
  <Header
    style={{
      background: '#fff',
      boxShadow: '0 2px 8px #f0f1f2',
      marginBottom: '24px',
    }}
  >
    <div style={{ float: 'left', margin: '0 20px 0 0' }}>INT</div>
    <Menu
      mode="horizontal"
      theme="light"
      defaultSelectedKeys={[selected]}
      style={{ lineHeight: '64px', border: 'none' }}
    >
      <Item key="home">
        <Link to="/">Home</Link>
      </Item>
      <Item key="documentation">
        <Link to="/documentation/">Documentation</Link>
      </Item>
      <Item key="maps">
        <Link to="/maps/">Maps</Link>
      </Item>
    </Menu>
  </Header>
);

export default PageHeader;
