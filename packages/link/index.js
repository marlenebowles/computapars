import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { color } from 'styled-system';

const BaseLink = styled.a`
	${color}
	display: inline-block;
	transition: all .3s ease-in-out;
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

export const StyledLink = styled(BaseLink)`
	${props => props.color == 'primary' &&
		css`
			&:link, &:visited, &:active {
				color: ${props.theme.colors.primary};
			}
			&:hover, &:focus {
				cursor: pointer;
				color: ${darken(0.15, props.theme.colors.primary)};
			}
		`};
	${props => props.color == 'secondary' &&
		css`
			&:link, &:visited, &:active {
				color: ${props.theme.colors.secondary};
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
