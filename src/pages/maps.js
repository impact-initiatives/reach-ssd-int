import React, { Component } from 'react';
import { Layout } from 'antd';

import PageHeader from '../components/page-header';
import styles from '../styles/maps.module.css';

const { Content, Footer } = Layout;

class MapsPage extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const options = {
        height: '100%',
        width: '100%',
      };
      import('../scripts/tableau-2.2.2.min.js').then(() => {
        const vizUrl =
          'https://public.tableau.com/views/REACH_SSD_INT_Jan2019/INT';
        const vizContainer = this.vizContainer;
        new window.tableau.Viz(vizContainer, vizUrl, options);
      });
    }
  }

  render() {
    return (
      <Layout className={styles.layout}>
        <PageHeader selected="maps" />
        <Layout className={styles.layout}>
          <Content className={styles.content}>
            <div ref={e => (this.vizContainer = e)} className={styles.map} />
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
          Created by REACH Initiative
        </Footer>
      </Layout>
    );
  }
}

export default MapsPage;
