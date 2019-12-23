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
} from './src/index';
export default {
	title: 'Components | Layout',
};

export const contained = () => (
	<Container bg="secondary" p={['sm', 'md']}>
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
		<MainGrid></MainGrid>
		<FooterGrid></FooterGrid>
	</HeroGrid>
);
