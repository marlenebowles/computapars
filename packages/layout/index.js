import styled, { css } from 'styled-components';
import { media, spacing } from '@computapars/core';

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
	padding: ${spacing.gutters.sm};
	${media.greaterThan('md')`
        max-width: ${media.maxWidths.md}px;
        padding: ${spacing.gutters.md};
    `}
	${media.greaterThan('lg')`
        max-width: ${media.maxWidths.lg}px;
        padding: ${spacing.gutters.md};
    `}
`;

export const HeaderGrid = styled.header`
	grid-area: header;
	background-color: #648ca6;
`;

export const AsideGrid = styled.aside`
	grid-area: sidenav;
	background-color: #394263;
`;
export const MainGrid = styled.main`
	grid-area: main;
	background-color: #8fd4d9;
`;

export const FooterGrid = styled.footer`
	grid-area: footer;
	background-color: #648ca6;
`;

export const HolyGrailGrid = styled.div`
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

export const HeroGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr 50px;
	grid-template-areas:
		'header'
		'main'
		'footer';
	height: 100vh;
`;
