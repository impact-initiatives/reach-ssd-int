import React from 'react';
import { Provider } from 'react-redux';

import createStore from './create-store';
import IsLoggedIn from '../components/is-logged-in';
import '../styles/global.css';

const store = createStore();

export default ({ element }) => (
  <Provider store={store}>
    <IsLoggedIn element={element} />
  </Provider>
);
