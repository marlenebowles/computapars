import React from 'react';
import { H1, IntroText } from '@computapars/typography';
import {
	Container,
	FullMainLayout,
	MainGrid,
	Divider,
} from '@computapars/layout';
import { FlexBox, FlexBoxItem } from '@computapars/flex';

export default {
	title: 'Core | Core',
	decorators: [
		storyFn => (
			<FullMainLayout>
				<MainGrid>
					<FlexBox column full center>
						<Container backgroundColor="white">
							<FlexBoxItem>
								<H1 margin={['0', '0']}>Core</H1>
							</FlexBoxItem>
							<FlexBoxItem>
								<Divider></Divider>
							</FlexBoxItem>
							<IntroText>
								Computapars uses design tokens instead of hard
								coded values to ensure a better UI consistency
								across different platforms.
							</IntroText>
							{storyFn()}
						</Container>
					</FlexBox>
				</MainGrid>
			</FullMainLayout>
		),
	],
};

export const spacing = () => {
	<div>Core</div>;
};

export const animations = () => {
	<div>Core</div>;
};

export const padding = () => {
	<div>Core</div>;
};

export const borders = () => {
	<div>Core</div>;
};

export const boxShadows = () => {
	<div>Core</div>;
};

export const typography = () => {
	<div>Core</div>;
};

export const themes = () => {
	<div>Core</div>;
};
