import React from 'react';
import { Provider } from 'react-redux';
import { notification } from 'antd';

import createStore from './create-store';
import IsLoggedIn from './is-logged-in';
import '../styles/global.css';

const store = createStore();

const updatingMessage = {
  message: 'Update Downloading',
  description: 'A new version of this site is downloading in the background.',
  duration: 0,
};

const updatedMessage = {
  message: 'Update Downloaded',
  description: 'Please refresh this page for new content.',
  duration: 0,
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(register => {
    if (navigator.serviceWorker.controller) {
      register.onupdatefound = () => {
        notification.open(updatingMessage);
        const installingWorker = register.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            notification.open(updatedMessage);
          }
        };
      };
    }
  });
}

export default ({ element }) => (
  <Provider store={store}>
    <IsLoggedIn element={element} />
  </Provider>
);
