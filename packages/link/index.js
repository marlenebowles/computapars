import styled from 'styled-components';
import { animations } from '@computapars/core';

const BaseLink = styled.a`
    display: inline-block;
    transition: ${animations.all}
	:active,
	:focus,
	:hover {
		text-decoration: none;
		outline: none;
		cursor: pointer;
	}
`;

export const Link = styled(BaseLink)`
	${props =>
		props &&
		props.primary &&
		css`
			color: ${props.theme.colors.primary};
			:hover,
			:focus {
				cursor: pointer;
				color: ${darken(0.15, props.theme.colors.primary)};
			}
		`};
	${props =>
		props &&
		props.secondary &&
		css`
			color: ${props.theme.colors.secondary};
			:hover,
			:focus {
				cursor: pointer;
				color: ${darken(0.15, props.theme.colors.secondary)};
			}
		`};
`;
