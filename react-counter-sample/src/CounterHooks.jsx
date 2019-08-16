import React, { useState } from 'react';

import Button from './components/Button';
import DivCounter from './components/DivCounter';

const CounterHooks = ({ countHooks = 0 }) => {
  const [count, setCount] = useState(countHooks);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <DivCounter>
      <h2>Counter with hooks</h2>
      <Button action={decrement}>-</Button>
      <h2>{count}</h2>
      <Button action={increment}>+</Button>
    </DivCounter>
  );

}

export default CounterHooks;
