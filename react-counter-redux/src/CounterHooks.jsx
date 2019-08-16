import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DECREMENT, INCREMENT } from './redux/actions';

import Button from './components/Button'
import DivCounter from './components/DivCounter'

const CounterHooks = () => {
  const count = useSelector(state => state.countHooks);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: INCREMENT, origin: 'hooks' });
  const decrement = () => dispatch({ type: DECREMENT, origin: 'hooks' });

  return (
    <DivCounter>
      <h2>Counter with hooks</h2>
      <Button action={decrement}>-</Button>
      <h3>{count}</h3>
      <Button action={increment}>+</Button>
    </DivCounter>
  )
};

export default CounterHooks;