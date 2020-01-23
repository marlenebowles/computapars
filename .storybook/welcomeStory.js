import React, { Fragment } from 'react';
import { Text, H1, H3, H5 } from '@computapars/typography';
import { FlexBox } from '@computapars/flex';
import { DiscoIcon } from '@computapars/icon';

export default {
	title: 'Computapars | About',
	decorators: [
		storyFn => <div style={{ backgroundColor: 'black' }}>{storyFn()}</div>,
	],
	parameters: {
		knobs: { disabled: true },
		actions: { disabled: true },
		options: { showPanel: false },
	},
};

export const welcome = () => (
	<FlexBox height={'100vh'} justifyContent="center" alignItems="center">
		<FlexBox
			width={[1, 1, 3 / 4, 3 / 4]}
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			<H1 color="white">Computapars</H1>
			<H3 marginTop={'sm'} color="white">
				<i>Definition:</i> Latin in origin, meaning computer party.
			</H3>
			<DiscoIcon size={60} />
			<Text fontFamily="primary" color="white">
				A reusable React component library designed to help build
				personal projects <i>faster</i>. Party.
			</Text>
		</FlexBox>
	</FlexBox>
);
