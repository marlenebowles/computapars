import React from 'react';
import { Text, H1, H3 } from '@computapars/typography';
import { FlexBox } from '@computapars/flex';
import { DiscoIcon } from '@computapars/icon';
import {Link} from '@computapars/link';

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
			<FlexBox flexDirection="column" alignItems="center" justifyContent="center" paddingTop="sm" width="80vw">
				<Text fontFamily="primary" color="white">
					A reusable React component library using  <Link variant="primary" href="https://styled-components.com/" label="Styled Components"/> and <Link variant="primary" href="https://styled-system.com/" label="Styled System"/> - designed to help build
					personal projects <i>faster</i>. Party.
				</Text>
				<Text fontFamily="primary" color="white">
					Explore theming, by toggling between the available themes, Gallery and Bossy.
				</Text>
			</FlexBox>
			
		</FlexBox>
	</FlexBox>
);
