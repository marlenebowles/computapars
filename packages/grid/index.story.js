import React from 'react';
import { FluidGridContainer, FixedGridContainer, GridItem } from './index';
import { colors, spacing } from '@computapars/core';

export default {
	title: 'Grids',
};

export const fluidGridContainer = () => (
	<FluidGridContainer
		cols={[2, 4]}
		padding={('none', 'none')}
		background={colors.grey1}
	>
		<GridItem background={colors.grey3}>Stars</GridItem>
		<GridItem background={colors.grey3}>Planets</GridItem>
		<GridItem background={colors.grey3}>Constellations</GridItem>
		<GridItem background={colors.grey3}>Galaxies</GridItem>
	</FluidGridContainer>
);

export const fluidGridStartEnd = () => (
	<FluidGridContainer background={colors.grey1} cols={[1, 4]}>
		<GridItem background={colors.grey3} start={'span 2'}>
			Stars
		</GridItem>
		<GridItem background={colors.grey3}>Planets</GridItem>
		<GridItem background={colors.grey3}>Constellations</GridItem>
	</FluidGridContainer>
);

export const fluidGridSpan = () => (
	<FluidGridContainer cols={[4]}>
		<GridItem background={colors.grey3} span={'span 2'}>
			Stars
		</GridItem>
		<GridItem background={colors.grey3}>Planets</GridItem>
	</FluidGridContainer>
);

export const fixedGridContainer = () => (
	<FixedGridContainer
		cols={[
			['100px', 'auto', 'auto'],
			['500px', 'auto', 'auto'],
		]}
		padding={('none', 'none')}
		background={colors.grey1}
	>
		<GridItem background={colors.grey3}>Stars</GridItem>
		<GridItem background={colors.grey3}>Planets</GridItem>
		<GridItem background={colors.grey3}>Constellations</GridItem>
		<GridItem background={colors.grey3}>Galaxies</GridItem>
	</FixedGridContainer>
);
