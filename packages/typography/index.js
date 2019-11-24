import styled, { css } from 'styled-components';
import { typography, breakpoints, colors } from '@computapars/core';

export const Text = styled.p`
	font-family: ${typography.type.primary};
	font-size: ${typography.size.md};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.md}
    color: ${colors.gray1};
    ${props =>
		props.fontSize &&
		css`
			font-size: ${typography.size[props.fontSize]};
		`};
`;

const baseHeader = css`
	font-family: ${typography.type.primary};
	color: ${colors.gray1};
`;

export const H1 = styled.h1`
	${baseHeader};
	font-size: ${typography.size.xxxl};
	line-height: ${typography.lineHeight.xs};
`;

export const H2 = styled.h2`
	${baseHeader};
	font-size: ${typography.size.xxl};
	line-height: ${typography.lineHeight.sm};
`;

export const H3 = styled.h3`
	${baseHeader};
	font-size: ${typography.size.xl};
	line-height: ${typography.lineHeight.sm};
`;

export const H4 = styled.h4`
	${baseHeader};
	font-size: ${typography.size.lg};
	line-height: ${typography.lineHeight.sm};
`;

export const H5 = styled.h5`
	${baseHeader};
	font-size: ${typography.size.md};
	line-height: ${typography.lineHeight.sm};
`;

export const H6 = styled.h6`
	${baseHeader};
	font-size: ${typography.size.sm};
	line-height: ${typography.lineHeight.sm};
`;
