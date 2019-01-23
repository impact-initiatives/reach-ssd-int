import React, { Component } from 'react';
import { Layout, Row } from 'antd';

import PageHeader from '../components/page-header';

const { Content, Footer } = Layout;

class DocumentationPage extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const height = window.innerHeight - 200;
      const options = {
        height: height,
        width: '100%',
      };
      import('../../static/tableau-2.2.2.min.js').then(() => {
        const vizUrl =
          'https://public.tableau.com/views/REACH_SSD_INT_Jan2019/INT';
        const vizContainer = this.vizContainer;
        new window.tableau.Viz(vizContainer, vizUrl, options);
      });
    }
  }

  render() {
    return (
      <Layout style={{ background: '#fff' }}>
        <PageHeader selected="maps" />
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Row type="flex" justify="center">
              <div
                ref={e => (this.vizContainer = e)}
                style={{ width: '100%', maxWidth: 1200 }}
              />
            </Row>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
          Created by REACH Initiative
        </Footer>
      </Layout>
    );
  }
}

export default DocumentationPage;
