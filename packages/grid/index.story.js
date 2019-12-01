import React from 'react';
import { FluidGridContainer, FixedGridContainer, GridItem } from './index';

export default {
	title: 'Grids',
};

export const fluidGridContainer = () => (
	<FluidGridContainer cols={[2, 4]} padding={['none', 'none']}>
		<GridItem>Stars</GridItem>
		<GridItem>Planets</GridItem>
		<GridItem>Constellations</GridItem>
		<GridItem>Galaxies</GridItem>
	</FluidGridContainer>
);

export const fixedGridContainer = () => (
	<FixedGridContainer
		cols={[
			['100px', '1fr', '1fr'],
			['2fr', '1fr', '1fr'],
		]}
		padding={['none', 'none']}
	>
		<GridItem>Stars</GridItem>
		<GridItem>Planets</GridItem>
		<GridItem>Constellations</GridItem>
		<GridItem>Galaxies</GridItem>
	</FixedGridContainer>
);

export const defaultView = () => <div>Kittens</div>;
