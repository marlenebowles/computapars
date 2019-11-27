import React from 'react';
import { FluidGridContainer, FixedGridContainer, GridItem } from './index';
import { colors } from '@computapars/core';

export default {
	title: 'Grids',
};

export const fluidGridContainer = () => (
	<FluidGridContainer
		cols={[2, 4]}
		padding={['none', 'none']}
		background={colors.grey1}
	>
		<GridItem background={colors.grey3}>Stars</GridItem>
		<GridItem background={colors.grey3}>Planets</GridItem>
		<GridItem background={colors.grey3}>Constellations</GridItem>
		<GridItem background={colors.grey3}>Galaxies</GridItem>
	</FluidGridContainer>
);


export const fixedGridContainer = () => (
	<FixedGridContainer
		cols={[
			['100px', '1fr', '1fr'],
			['2fr', '1fr', '1fr'],
		]}
		padding={['none', 'none']}
		background={colors.grey1}
	>
		<GridItem background={colors.grey3}>Stars</GridItem>
		<GridItem background={colors.grey3}>Planets</GridItem>
		<GridItem background={colors.grey3}>Constellations</GridItem>
		<GridItem background={colors.grey3}>Galaxies</GridItem>
	</FixedGridContainer>
);
