import styled, { css } from 'styled-components';
import { media, spacing } from '@computapars/core';

export const baseLayout = css`
	background-color: ${props =>
		props.backgroundColor ? props.backgroundColor : 'inherit'};
`;

export const Divider = styled.div`
	user-select: none;
	height: 1px;
	margin-bottom: ${spacing.margin.md} !important;
	margin-top: ${spacing.margin.md} !important;
	background: ${props => props.theme.colors.divider};
	display: block;
	width: 100%;
	border: none;
`;

export const Container = styled.div`
	display: block;
	max-width: ${media.maxWidths.sm}px;
	padding: ${spacing.gutters.md};
    ${baseLayout};
	${media.greaterThan('md')`
        max-width: ${media.maxWidths.md}px;
        padding: ${spacing.gutters.lg};
    `} ${media.greaterThan('lg')`
        max-width: ${media.maxWidths.lg}px;
        padding: ${spacing.gutters.lg};
    `} ${props =>
	props.narrow &&
	css`
		max-width: ${media.maxWidths.sm}px;
		padding: ${spacing.gutters.sm};
		${media.greaterThan('md')`
                max-width: ${media.maxWidths.md}px;
                padding: ${spacing.gutters.md};
            `}
	`};
`;

export const HeaderGrid = styled.header`
	grid-area: header;
	${baseLayout};
`;

export const AsideGrid = styled.aside`
	grid-area: sidenav;
	${baseLayout};
`;
export const MainGrid = styled.main`
	grid-area: main;
	${baseLayout};
`;

export const FooterGrid = styled.footer`
	grid-area: footer;
	${baseLayout};
`;

export const HolyGrailLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr 50px;
	grid-template-areas:
		'header'
		'main'
		'footer';
	height: 100vh;
	${MainGrid} {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 50px 1fr;
		grid-template-areas: 'sidenav';
		${media.greaterThan('sm')`
            grid-template-columns: 240px 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: 'sidenav main';
        `}
	}
`;

export const HeroLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr 50px;
	grid-template-areas:
		'header'
		'main'
		'footer';
	height: 100vh;
`;

export const FullMainLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	height: 100vh;
	grid-template-areas: 'main';
`;
