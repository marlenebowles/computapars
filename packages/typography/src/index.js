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
	${({theme}) => css`
		font-size: ${theme.fontSizes.sm};
		${theme.mediaQueries.sm} {
			font-size: ${theme.fontSizes.md};
		}
	`}
`;

export const IntroText = styled(BaseText)`
	${({theme}) => css`
		font-size: ${theme.fontSizes.md};
		${theme.mediaQueries.sm} {
			font-size: ${theme.fontSizes.lg};
		}
	`}
`;

export const FineText = styled(BaseText)`
	${({theme}) => css`
		font-size: ${theme.fontSizes.xs};
	`}
`;

const baseHeader = css`
	${color}
	${space}
	${typography}
`;

baseHeader.defaultProps = {
	fontFamily: "primary",
	color: "text",
}

export const H1 = styled.h1`
	${baseHeader};
	${({theme}) => css`
		font-size: ${theme.fontSizes.xxl};
		line-height: ${theme.lineHeights.xs};
		${theme.mediaQueries.sm} {
        	font-size: ${theme.fontSizes.xxxl};
    	}
	`}
`;

export const H2 = styled.h2`
	${baseHeader};
	${({theme}) => css`
		font-size: ${theme.fontSizes.xl};
		line-height: ${theme.lineHeights.sm};
		${theme.mediaQueries.md} {
        	font-size: ${theme.fontSizes.xxl};
    	}
	`}
`;

export const H3 = styled.h3`
	${baseHeader};
	${({theme}) => css`
		font-size: ${theme.fontSizes.lg};
		line-height: ${theme.lineHeights.sm};
		${theme.mediaQueries.md} {
        	font-size: ${theme.fontSizes.xl};
    	}
	`}
`;

export const H4 = styled.h4`
	${baseHeader};
	${({theme}) => css`
		font-size: ${theme.fontSizes.md};
		line-height: ${theme.lineHeights.sm};
		${theme.mediaQueries.md} {
        	font-size: ${theme.fontSizes.lg};
    	}
	`}
`;

export const H5 = styled.h5`
	${baseHeader};
	${({theme}) => css`
		font-size: ${theme.fontSizes.md};
		line-height: ${theme.lineHeights.sm};
	`}
	text-transform: uppercase;
`;

export const H6 = styled.h6`
	${baseHeader};
	${({theme}) => css`
		font-size: ${theme.fontSizes.sm};
		line-height: ${theme.lineHeights.sm};
	`}
	text-transform: uppercase;
`;
