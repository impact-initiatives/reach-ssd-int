import React from 'react';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import TableauMaps from '../components/tableau-maps';

const MapsPage = () => (
  <div>
    <PageHeader tab="/maps" />
    <section className="section">
      <TableauMaps />
    </section>
    <PageFooter />
  </div>
);

export default MapsPage;
