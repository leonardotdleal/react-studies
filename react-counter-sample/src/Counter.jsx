import React, { Component } from 'react';
import styled from 'styled-components';

const DivCounter = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ButtonStyled = styled.button`
  background: #03A6E3;
  border-radius: 3px;
  border: 2px solid #03A6E3;
  box-shadow: 0px 10px 12px -10px #000000, 0px 20px 10px 0px rgba(0,0,0,0);
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.5em;
  margin: 0.5em;
  padding: 0.25em 1em;

  &:active {
    font-weight: bold;
  }
`;

const Button = (props) => <ButtonStyled onClick={props.action}>{props.children}</ButtonStyled>

class Counter extends Component {
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
        <Button action={this.decrement}>-</Button>
        <h2>{this.state.count}</h2>
        <Button action={this.increment}>+</Button>
      </DivCounter>
    );
  }

}

export default Counter;
