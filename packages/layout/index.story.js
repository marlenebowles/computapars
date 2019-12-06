import React, { Fragment } from 'react';
import {
	Divider,
	HolyGrailGrid,
	HeroGrid,
	HeaderGrid,
	AsideGrid,
	FooterGrid,
	MainGrid,
} from './index';
export default {
	title: 'Components | Layout',
};

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
