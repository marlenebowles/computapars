import React from 'react';
import {
	HolyGrailGrid,
	HeroGrid,
	HeaderGrid,
	AsideGrid,
	FooterGrid,
	MainGrid,
} from './index';

export default {
	title: 'Components | Grid',
};

export const HolyGrailLayout = () => (
	<HolyGrailGrid>
		<HeaderGrid>header</HeaderGrid>
		<MainGrid>
			<AsideGrid>asode</AsideGrid>
			main
		</MainGrid>
		<FooterGrid>footer</FooterGrid>
	</HolyGrailGrid>
);

export const HeroLayout = () => (
	<HolyGrailGrid>
		<HeaderGrid>header</HeaderGrid>
		<MainGrid>main</MainGrid>
		<FooterGrid>footer</FooterGrid>
	</HolyGrailGrid>
);
