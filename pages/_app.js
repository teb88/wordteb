import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import store, {persistor} from '../src/store';

import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    });
  }
}

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={
        <div className="w-full h-full flex items-center justify-center text-4xl">LOADING</div>
      }>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
