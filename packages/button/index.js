import styled, { css } from 'styled-components'
import { colors } from '@computapars/core';

const BaseButton = styled.button`
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.25em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`
// figure out how to dark on hover

const Button = styled(BaseButton)`
  ${props =>
    props.orange &&
    css`
      background: ${colors.orange1}
      color: ${colors.white};
    `};
  ${props =>
    props.blue &&
    css`
      background: ${colors.blue1};
      color: ${colors.white};
    `};
  ${props =>
    props.disabled &&
    css`
      opacity: 0.25;
      cursor: not-allowed;
      color: ${colors.white};
    `};
`
export default Button;
