import React, { Fragment } from 'react';
import {
	Divider,
	HolyGrailLayout,
	HeroLayout,
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

export const holyGrail = () => (
	<HolyGrailLayout>
		<HeaderGrid></HeaderGrid>
		<MainGrid>
			<AsideGrid></AsideGrid>
		</MainGrid>
		<FooterGrid></FooterGrid>
	</HolyGrailLayout>
);

export const hero = () => (
	<HeroLayout>
		<HeaderGrid></HeaderGrid>
		<MainGrid>
			<Divider />
		</MainGrid>
		<FooterGrid></FooterGrid>
	</HeroLayout>
);
