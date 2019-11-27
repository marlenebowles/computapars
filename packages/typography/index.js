import styled, { css } from 'styled-components';
import { typography, media, colors } from '@computapars/core';

const getTextVariationSizes = variation => {
	if (variation == 'fine') {
		return css`
			font-size: ${typography.size.xs};
		`;
	} else if (variation == 'intro') {
		return css`
			font-size: ${typography.size.md};
			${media.greaterThan('sm')`
                font-size: ${typography.size.lg};
            `}
		`;
	}
};
export const Text = styled.p`
	font-family: ${props => {	
		props.theme.fonts.primary;
	}}
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.md}
    color: ${colors.gray1};
    font-size: ${typography.size.sm};
    ${media.greaterThan('sm')`
        font-size: ${typography.size.md};
    `}
    ${props => props.variation && getTextVariationSizes(props.variation)}
`;

const baseHeader = css`
	font-family: ${typography.type.primary};
	color: ${colors.gray1};
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
