import styled, { css } from 'styled-components';
import { media, spacing } from '@computapars/core';
import PropTypes from 'prop-types';

export const HeaderGrid = styled.header`
	grid-area: header;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 16px;
	background-color: #648ca6;
	background-color: #648ca6;
`;

export const AsideGrid = styled.aside`
	grid-area: sidenav;
	background-color: #394263;
`;
export const MainGrid = styled.main`
	display: grid;
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
	${MainGrid} {
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
