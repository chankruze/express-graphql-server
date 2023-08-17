/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 11:21:21 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

import os from 'os';

export const getNetWorkUrl = () => {
  const networkInterfaces = os.networkInterfaces();

  const validInterfaceKeys = Object.keys(networkInterfaces).filter(
    (nic) => !nic.toLowerCase().includes('lo')
  );

  const validInterfaces = Object.values(
    networkInterfaces[validInterfaceKeys[0]]
  ).filter(
    (alias) =>
      alias.family === 'IPv4' &&
      alias.address !== '127.0.0.1' &&
      !alias.internal
  );

  return validInterfaces[0].address || '0.0.0.0';
};

export const isDevEnv = () => process.env.NODE_ENV === 'development';

export const banner = (port) => {
  console.log('├───────────────────────────┤');
  console.log('├ 🚀 server is listening on ┤');
  console.log('├───────────────────────────┤');

  if (isDevEnv()) console.log(`└── <localhost>\thttp://localhost:${port}`);

  return console.log(`└── <network>\thttp://${getNetWorkUrl()}:${port}`);
};
