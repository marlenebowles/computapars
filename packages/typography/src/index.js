import styled, { css } from 'styled-components';
import { color, space, typography } from 'styled-system';

export const BaseText = styled.p`
    ${color}
    ${space}
    ${typography}
`;

BaseText.defaultProps = {
	fontFamily: 'secondary',
	fontWeight: 'regular',
	lineHeight: 'sm',
	color: 'text',
};

export const Text = styled(BaseText)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.sm};
		${theme.mediaQueries.sm} {
			font-size: ${theme.fontSizes.md};
		}
	`}
`;

export const IntroText = styled(BaseText)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.md};
		${theme.mediaQueries.sm} {
			font-size: ${theme.fontSizes.lg};
		}
	`}
`;

export const FineText = styled(BaseText)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.xs};
	`}
`;

export const H1 = styled.h1`
    ${color}
    ${space}
    ${typography}
	${({ theme }) => css`
		font-size: ${theme.fontSizes.xxl};
		line-height: ${theme.lineHeights.xs};
		${theme.mediaQueries.sm} {
			font-size: ${theme.fontSizes.xxxl};
		}
	`}
`;

H1.defaultProps = {
	fontFamily: 'primary',
	color: 'text',
	fontSize: 'xxxl',
};

export const H2 = styled.h2`
    ${color}
    ${space}
    ${typography}
	${({ theme }) => css`
		font-size: ${theme.fontSizes.xl};
		line-height: ${theme.lineHeights.sm};
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes.xxl};
		}
	`}
`;

H2.defaultProps = {
	fontFamily: 'primary',
	color: 'text',
};

export const H3 = styled.h3`
    ${color}
    ${space}
    ${typography}
	${({ theme }) => css`
		font-size: ${theme.fontSizes.lg};
		line-height: ${theme.lineHeights.sm};
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes.xl};
		}
	`}
`;

H3.defaultProps = {
	fontFamily: 'primary',
	color: 'text',
};

export const H4 = styled.h4`
    ${color}
    ${space}
    ${typography}
	${({ theme }) => css`
		font-size: ${theme.fontSizes.md};
		line-height: ${theme.lineHeights.sm};
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes.lg};
		}
	`}
`;

H4.defaultProps = {
	fontFamily: 'primary',
	color: 'text',
};

export const H5 = styled.h5`
    ${color}
    ${space}
    ${typography}
	${({ theme }) => css`
		font-size: ${theme.fontSizes.md};
		line-height: ${theme.lineHeights.sm};
	`}
	text-transform: uppercase;
`;

H5.defaultProps = {
	fontFamily: 'primary',
	color: 'text',
};

export const H6 = styled.h6`
    ${color}
    ${space}
    ${typography}
	${({ theme }) => css`
		font-size: ${theme.fontSizes.sm};
		line-height: ${theme.lineHeights.sm};
	`}
	text-transform: uppercase;
`;

H6.defaultProps = {
	fontFamily: 'primary',
	color: 'text',
};
