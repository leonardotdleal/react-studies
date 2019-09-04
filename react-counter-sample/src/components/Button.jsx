import React from "react"; // imr
import styled from "styled-components"; // isc

// sbc
const ButtonStyled = styled.button`
  background: #03a6e3;
  border-radius: 3px;
  border: 2px solid #03a6e3;
  box-shadow: 0px 10px 12px -10px #000000, 0px 20px 10px 0px rgba(0, 0, 0, 0);
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5em;
  margin: 0.5em;
  padding: 0.25em 1em;

  &:active {
    font-weight: bold;
  }
`;

const Button = props => (
  <ButtonStyled onClick={props.action}>{props.children}</ButtonStyled>
);

export default Button;
