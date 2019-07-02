import React from 'react';

import IsLoggedIn from './src/utils/is-logged-in';

export const wrapRootElement = ({ element }) => (
  <IsLoggedIn element={element} />
);
