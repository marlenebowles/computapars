import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { animations } from '@computapars/core';
import { darken } from 'polished';
const BaseLink = styled.a`
	display: inline-block;
	transition: ${animations.all};
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
	${props =>
		props &&
		props.type == 'primary' &&
		css`
			&:link,
			&:visited,
			&:active {
				color: ${props.theme.colors.primary};
			}
			&:hover,
			&:focus {
				cursor: pointer;
				color: ${darken(0.15, props.theme.colors.primary)};
			}
		`};
	${props =>
		props &&
		props.type == 'secondary' &&
		css`
			&:link,
			&:visited,
			&:active {
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
