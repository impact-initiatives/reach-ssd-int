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
      position: 'relative',
      marginBottom: '24px',
    }}
  >
    <div className="logo" />
    <Menu
      mode="horizontal"
      theme="light"
      defaultSelectedKeys={[selected]}
      style={{ lineHeight: '64px', border: 'none' }}
    >
      <Item key="documentation">
        <Link to="/documentation/hhs/">Documentation</Link>
      </Item>
      <Item key="maps">
        <Link to="/maps/">Maps</Link>
      </Item>
    </Menu>
  </Header>
);

export default PageHeader;
