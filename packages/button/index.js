import styled, { css } from 'styled-components'
import { colors } from '@computapars/core';
console.log(colors)
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.grey1};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  ${props =>
    props.disabled &&
    css`
      background: palevioletred;
      color: white;
    `};
`
export default Button;
