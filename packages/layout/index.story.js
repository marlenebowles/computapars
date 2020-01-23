import React, { Fragment } from 'react';
import { Text } from '@computapars/typography';
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
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			culpa qui officia deserunt mollit anim id est laborum.
		</Text>
	</Container>
);
export const divider = () => (
	<Container>
		<Divider />
	</Container>
);

export const HolyGrailLayout = () => (
	<HolyGrailGrid bg="primary">
		<HeaderGrid bg="secondary"></HeaderGrid>
		<MainGrid bg="error">
			<AsideGrid bg="primary"></AsideGrid>
		</MainGrid>
		<FooterGrid bg="secondary"></FooterGrid>
	</HolyGrailGrid>
);

export const HeroLayout = () => (
	<HeroGrid bg="primary">
		<HeaderGrid bg="secondary"></HeaderGrid>
		<MainGrid bg="error"></MainGrid>
		<FooterGrid bg="secondary"></FooterGrid>
	</HeroGrid>
);
