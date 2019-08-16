/** rcrdux */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DECREMENT, INCREMENT } from './redux/actions';

import Button from './components/Button'
import DivCounter from './components/DivCounter'

const increment = () => ({ type: INCREMENT, origin: 'class' });
const decrement = () => ({ type: DECREMENT, origin: 'class' });

class CounterClass extends Component {
  state = {
    countClass: 0
  }

  render() {
    return (
      <DivCounter>
        <h2>Counter with class</h2>
        <Button action={this.props.decrement}>-</Button>
        <h3>{this.props.countClass}</h3>
        <Button action={this.props.increment}>+</Button>
      </DivCounter>
    )
  }
}

const mapStateToProps = state => ({
  countClass: state.countClass
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
