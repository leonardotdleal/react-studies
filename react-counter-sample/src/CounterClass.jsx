import React, { Component } from 'react';

import Button from './components/Button';
import DivCounter from './components/DivCounter';

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <DivCounter>
        <h2>Counter with class</h2>
        <Button action={this.decrement}>-</Button>
        <h3>{this.state.count}</h3>
        <Button action={this.increment}>+</Button>
      </DivCounter>
    );
  }

}

export default CounterClass;
