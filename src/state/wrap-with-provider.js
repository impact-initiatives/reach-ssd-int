import React from 'react';
import { Provider } from 'react-redux';
import { isLoggedIn, isLoginPage } from '../utils/auth';

import createStore from './create-store';

const isBrowser = typeof window !== 'undefined';
const store = createStore();

if (isBrowser && !isLoggedIn() && !isLoginPage()) {
  window.location.replace('/login/')
}

export default ({ element }) => <Provider store={store}>{element}</Provider>;
