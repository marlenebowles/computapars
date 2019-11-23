import styled, { css } from 'styled-components';
import { colors, animations } from '@computapars/core';
import { darken } from 'polished';

const BaseButton = styled.button`
	background: transparent;
	border-radius: 4px;
	border: none;
	padding: 0.25em 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${animations.background};
`;
const Button = styled(BaseButton)`
	${props =>
		props.orange &&
		css`
      cursor: pointer;
      background: ${colors.orange1}
      color: ${colors.white};
      :hover, :focus {
        background: ${darken(0.15, colors.orange1)};
        color: ${darken(0.15, colors.white)};
      }
    `};
	${props =>
		props.blue &&
		css`
			cursor: pointer;
			background: ${colors.blue1};
			color: ${colors.white};
			:hover,
			:focus {
				background: ${darken(0.15, colors.blue1)};
			}
		`};
`;
export default Button;
