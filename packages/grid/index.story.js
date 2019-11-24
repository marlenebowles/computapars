import React from 'react';
import { GridContainer, GridItem } from './index';
import { colors, spacing } from '@computapars/core';

export default {
	title: 'Grid',
};

export const gridContainer = () => (
	<GridContainer cols={[4]}>
		<GridItem>Stars</GridItem>
		<GridItem>Planets</GridItem>
		<GridItem>Constellations</GridItem>
		<GridItem>Galaxies</GridItem>
	</GridContainer>
);

export const gridResponsiveContainer = () => (
	<GridContainer cols={[4, 2]}>
		<GridItem>Stars</GridItem>
		<GridItem>Planets</GridItem>
		<GridItem>Constellations</GridItem>
		<GridItem>Galaxies</GridItem>
	</GridContainer>
);

export const gridStartEnd = () => (
	<GridContainer
		cols={[4]}
		style={{
			backgroundColor: `${colors.gray4}`,
			padding: `${spacing.padding.md}`,
		}}
	>
		<GridItem
			style={{
				backgroundColor: `${colors.gray1}`,
			}}
			start={2}
		>
			Stars
		</GridItem>
		<GridItem>Planets</GridItem>
		<GridItem>Constellations</GridItem>
	</GridContainer>
);

export const gridSpan = () => (
	<GridContainer cols={[4]}>
		<GridItem span={'span 2'}>Stars</GridItem>
		<GridItem>Planets</GridItem>
	</GridContainer>
);
