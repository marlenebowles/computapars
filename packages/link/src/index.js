import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { color, variant, typography } from 'styled-system';

const BaseLink = styled.a`
    ${color}
    ${typography}
	${variant({
		variants: {
			primary: {
				color: 'primary',
			},
			secondary: {
				color: 'secondary',
			},
		},
	})}
	display: inline-block;
	transition: all 0.3s ease-in-out;
	text-decoration: none;
	&:link,
	&:visited,
	&:active,
	&:hover {
		text-decoration: none;
		outline: none;
		cursor: pointer;
	}
	&:focus {
		text-decoration: underline;
		outline: none;
	}
`;

const StyledLink = styled(BaseLink)`
	${props =>
		props.variant == 'primary' &&
		css`
			font-family: ${props.theme.fonts.primary};
			&:link,
			&:visited,
			&:active {
				color: ${props.theme.colors.primary};
				text-decoration: none;
			}
			&:hover,
			&:focus {
				cursor: pointer;
				color: ${darken(0.15, props.theme.colors.primary)};
			}
		`};
	${props =>
		props.variant == 'secondary' &&
		css`
			font-family: ${props.theme.fonts.secondary};
			&:link,
			&:visited,
			&:active {
				color: ${props.theme.colors.secondary};
				text-decoration: none;
			}
			&:hover,
			&:focus {
				cursor: pointer;
				color: ${darken(0.15, props.theme.colors.secondary)};
			}
		`};
`;

export const Link = ({ ...props }) => (
	<StyledLink {...props}>{props.label}</StyledLink>
);
