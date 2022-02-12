import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';

import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    })
  }
}


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
