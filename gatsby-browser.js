import { notification } from 'antd';

import wrapWithProvider from './src/utils/wrap-with-provider';
export const wrapRootElement = wrapWithProvider;

export const onServiceWorkerUpdateFound = () => {
  notification.open({
    message: 'Update Downloading',
    description: 'A new version of this site is downloading.',
    duration: 0,
  });
};

export const onServiceWorkerUpdateReady = () => {
  notification.open({
    message: 'Update Downloaded',
    description:
      'A new version of this site is available. Please refresh to get the latest content.',
    duration: 0,
  });
};
