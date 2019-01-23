import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { Item } = Menu;

const PageHeader = ({ selected }) => (
  <Header style={{ background: '#fff' }}>
    <div className="logo" />
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={[selected]}
      style={{ lineHeight: '64px' }}
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
