import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';

ReactDOM.render(
  <Provider store={store}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>React sample counter using redux</h1>
      <CounterClass />
      <CounterHooks />
    </div>
  </Provider>,
  document.getElementById('root')
);
