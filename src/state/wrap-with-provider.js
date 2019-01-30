import React from 'react';
import { Provider } from 'react-redux';
import { isLoggedIn } from '../utils/auth';

import LoginPage from '../templates/login';
import createStore from './create-store';
import '../styles/global.css';

const store = createStore();

export default ({ element }) => (
  <Provider store={store}>
    {isLoggedIn() ? element : <LoginPage />}
  </Provider>
);
