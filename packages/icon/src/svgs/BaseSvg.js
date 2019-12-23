import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { width, height, size } from 'styled-system';

const BlockSvg = styled.svg`
	${size}
	${width}
	${height}
	display: block;
	transform-origin: 50% 50%;
	fill: ${({ theme, fill }) => (fill ? fill : theme.colors.secondary)};
	&:hover,
	&focus {
		cursor: pointer;
		${props =>
			props.hover &&
			css`
				fill: ${darken(0.15, props.theme.colors.secondary)};
			`}
	}
`;

BlockSvg.defaultProps = {
	width: '24',
	height: '24'
}

export const BaseSvg = ({
	children,
	role,
	viewBox,
	direction,
	...props
}) => (
	<BlockSvg
		xmlns="http://www.w3.org/2000/svg"
		role={role}
		viewBox={viewBox}
		{...props}
	>
		{children}
	</BlockSvg>
);
