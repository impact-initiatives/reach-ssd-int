import { message } from 'antd';

import wrapWithProvider from './src/utils/wrap-with-provider';
export const wrapRootElement = wrapWithProvider;

export const onServiceWorkerUpdateFound = () => {
  message.loading('Downloading update...', 0);
};

export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true);
};
