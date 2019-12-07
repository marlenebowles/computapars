import styled, { css } from 'styled-components';
import { typography, media } from '@computapars/core';

export const BaseText = styled.p`
	font-family: ${props => props.theme.fonts.secondary};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.md}
    color: ${props => props.theme.colors.text};
`;

export const Text = styled(BaseText)`
	font-size: ${typography.size.sm};
	${media.greaterThan('sm')`
        font-size: ${typography.size.md};
    `}
`;

export const IntroText = styled(BaseText)`
	font-size: ${typography.size.md};
	${media.greaterThan('sm')`
        font-size: ${typography.size.lg};
    `}
`;

export const FineText = styled(BaseText)`
	font-size: ${typography.size.xs};
`;

const baseHeader = css`
	font-family: ${props => props.theme.fonts.primary};
	color: ${props => props.theme.colors.text};
	${props =>
		props.margin &&
		props.margin.length === 4 &&
		css`
			margin-top: ${props.margin[0]};
			margin-right: ${props.margin[1]};
			margin-bottom: ${props.margin[2]};
			margin-left: ${props.margin[3]};
		`}
	${props =>
		props.margin &&
		props.margin.length === 2 &&
		css`
			margin: ${props.margin[0]} ${props.margin[1]};
		`}
`;

export const H1 = styled.h1`
	${baseHeader};
	font-size: ${typography.size.xxl};
	line-height: ${typography.lineHeight.xs};
	${media.greaterThan('md')`
        font-size: ${typography.size.xxxl}; 
    `}
`;

export const H2 = styled.h2`
    ${baseHeader};
    font-size: ${typography.size.xl}
	line-height: ${typography.lineHeight.sm};
	${media.greaterThan('md')`
	    font-size: ${typography.size.xxl};
    `}
`;

export const H3 = styled.h3`
	${baseHeader};
	font-size: ${typography.size.lg};
	line-height: ${typography.lineHeight.sm};
	${media.greaterThan('md')`
        font-size: ${typography.size.xl};
    `}
`;

export const H4 = styled.h4`
	${baseHeader};
	font-size: ${typography.size.md};
	line-height: ${typography.lineHeight.sm};
	${media.greaterThan('md')`
	    font-size: ${typography.size.lg};
    `}
`;

export const H5 = styled.h5`
	${baseHeader};
	font-size: ${typography.size.md};
	text-transform: uppercase;
	line-height: ${typography.lineHeight.sm};
`;

export const H6 = styled.h6`
	${baseHeader};
	font-size: ${typography.size.sm};
	text-transform: uppercase;
	line-height: ${typography.lineHeight.sm};
`;
