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
	font-family: ${props => props.theme.buttons.font};
	font-weight: ${props => props.theme.buttons.weight};
	text-transform: uppercase;
	letter-spacing: ${props => props.theme.buttons.letterSpacing};
`;
const Button = styled(BaseButton)`
	${props =>
		props &&
		props.primary &&
		css`
            cursor: pointer;
            background: ${props.theme.buttons.colors.primary}
            color: ${colors.white};
            :hover, :focus {
                background: ${darken(0.15, props.theme.buttons.colors.primary)};
            }
    `};
	${props =>
		props &&
		props.secondary &&
		css`
			cursor: pointer;
            background: ${props.theme.buttons.colors.secondary}
			color: ${colors.white};
			:hover, :focus {
                background: ${darken(
					0.15,
					props.theme.buttons.colors.secondary
				)};
			}
		`};
`;
export default Button;
