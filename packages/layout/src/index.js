import styled, { css } from 'styled-components';
import { space, color } from 'styled-system';

export const Divider = styled.div`
	${space}
	${({ theme }) => css`
		margin-bottom: ${theme.space.md} !important;
		margin-top: ${theme.space.md} !important;
		background: ${theme.colors.divider};
	`}
	user-select: none;
	height: 1px;
	display: block;
	width: 100%;
	border: none;
`;

export const Container = styled.div`
	${color}
	${space}
    ${({ theme }) => css`
        padding: ${theme.space.sm};
		max-width: ${theme.sizes.maxWidths.sm}px;
		${theme.mediaQueries.sm} {
            padding: ${theme.space.md};
			max-width: ${theme.sizes.maxWidths.md}px;
		}
		${theme.mediaQueries.md} {
            padding: ${theme.space.md};
			max-width: ${theme.sizes.maxWidths.lg}px;
		}
		${theme.mediaQueries.lg} {
            padding: ${theme.space.lg}
			max-width: ${theme.sizes.maxWidths.xl}px;
		}
	`}	
	display: block;
	margin: 0 auto;
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
		${({ theme }) => css`
			${theme.mediaQueries.sm} {
				grid-template-columns: 240px 1fr;
				grid-template-rows: 1fr;
				grid-template-areas: 'sidenav main';
			}
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
