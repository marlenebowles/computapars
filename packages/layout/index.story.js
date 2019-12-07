import React, { Fragment } from 'react';
import {
	Divider,
	HolyGrailGrid,
	HeroGrid,
	HeaderGrid,
	AsideGrid,
	FooterGrid,
	MainGrid,
	Container,
} from './index';
export default {
	title: 'Components | Layout',
};

export const contained = () => (
	<Container
		style={{
			backgroundColor: '#ff7800',
		}}
	>
		<div>cats</div>
	</Container>
);

export const containedNarrow = () => (
	<Container
		style={{
			backgroundColor: '#ff7800',
		}}
		narrow
	>
		<div>cats</div>
	</Container>
);

export const divider = () => (
	<Fragment>
		<Divider />
	</Fragment>
);

export const HolyGrailLayout = () => (
	<HolyGrailGrid>
		<HeaderGrid></HeaderGrid>
		<MainGrid>
			<AsideGrid></AsideGrid>
		</MainGrid>
		<FooterGrid></FooterGrid>
	</HolyGrailGrid>
);

export const HeroLayout = () => (
	<HeroGrid>
		<HeaderGrid></HeaderGrid>
		<MainGrid>
			<Divider />
		</MainGrid>
		<FooterGrid></FooterGrid>
	</HeroGrid>
);
