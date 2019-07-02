import React from 'react';

import './src/styles/styles.sass';

import IsLoggedIn from './src/utils/is-logged-in';

const ELEMENT_ID = 'gatsby-browser-service-worker-notification';

const addProgressBar = () => {
  if (!document.getElementById(ELEMENT_ID)) {
    const elem = document.createElement('progress');
    elem.id = ELEMENT_ID;
    elem.className = 'progress is-small is-primary is-fixed-top';
    document.body.prepend(elem);
  }
};

const removeProgressBar = () => document.getElementById(ELEMENT_ID).remove();

if (
  window.location.protocol === 'https:' &&
  !navigator.serviceWorker.controller
) {
  addProgressBar();
}

export const onServiceWorkerActive = () => removeProgressBar();

export const onServiceWorkerUpdateFound = () => addProgressBar();

export const onServiceWorkerUpdateReady = () => window.location.reload();

export const wrapRootElement = ({ element }) => (
  <IsLoggedIn element={element} />
);
