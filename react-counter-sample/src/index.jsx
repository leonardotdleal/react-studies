import React from 'react';
import ReactDOM from 'react-dom';

import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';

ReactDOM.render(
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>React sample counter without using redux</h1>
    <CounterClass />
    <CounterHooks />
  </div>,
  document.getElementById('root')
);
