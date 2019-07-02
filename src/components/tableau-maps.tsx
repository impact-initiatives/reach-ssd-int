/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

declare global {
  interface Window {
    tableau: any;
  }
}

const componentDidMount = () => {
  const options = { height: '100%', width: '100%' };
  const vizUrl = 'https://public.tableau.com/views/REACH_SSD_INT_Jan2019/INT';
  const containerDiv = document.getElementById('tableau-map');
  import('../../static/tableau-2.2.2.min.js').then(() => {
    new window.tableau.Viz(containerDiv, vizUrl, options);
  });
};

const MapsPage = () => {
  useEffect(componentDidMount, []);
  return <div id="tableau-map" className="tableau-map-container" />;
};

export default MapsPage;
