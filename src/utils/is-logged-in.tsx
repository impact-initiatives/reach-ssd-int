import React, { useState, useEffect } from 'react';
import { isLoggedIn } from './auth';

import LoginPage from '../components/login';

interface Props {
  element: Element;
}

const componentDidMount = (setState: Function) =>
  setState(() => (isLoggedIn() ? 'AUTHENTICATED' : 'UNAUTHENTICATED'));

const IsLoggedIn = ({ element }: Props) => {
  const [state, setState] = useState('');
  useEffect(() => componentDidMount(setState), []);
  switch (state) {
    case 'AUTHENTICATED':
      return element;
    case 'UNAUTHENTICATED':
      return <LoginPage />;
    default:
      return null;
  }
};

export default IsLoggedIn;
