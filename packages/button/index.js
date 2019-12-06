import styled, { css } from 'styled-components';
import { animations, border } from '@computapars/core';
import { darken } from 'polished';

const BaseButton = styled.button`
	background: transparent;
	border-radius: ${border.radius.default};
	border: none;
	padding: 0.25em 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${props => (props.type == 'submit' ? '40px' : 'auto')};
	transition: ${animations.background};
	font-family: ${props => props.theme.buttons.font};
	font-weight: ${props => props.theme.buttons.weight};
	text-transform: uppercase;
	letter-spacing: ${props => props.theme.buttons.letterSpacing};
`;
const Button = styled(BaseButton)`
	${props =>
		props &&
		props.type == 'primary' &&
		css`
            cursor: pointer;
            background: ${props.theme.colors.primary}
            color: white;
            :hover, :focus {
                background: ${darken(0.15, props.theme.colors.primary)};
            }
    `};
	${props =>
		props &&
		props.type == 'secondary' &&
		css`
			cursor: pointer;
            background: ${props.theme.colors.secondary}
			color: white;
			:hover, :focus {
                background: ${darken(0.15, props.theme.colors.secondary)};
			}
		`};
`;
export default Button;
