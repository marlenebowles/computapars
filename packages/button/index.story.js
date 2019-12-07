import React from 'react';
import Button from './index';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { H1, IntroText } from '@computapars/typography';
import {
	Container,
	FullMainLayout,
	MainGrid,
	Divider,
} from '@computapars/layout';
import { FlexBox, FlexBoxItem } from '@computapars/flex';

export default {
	component: Button,
	title: 'Components | Button',
	decorators: [
		storyFn => (
			<FullMainLayout>
				<MainGrid>
					<FlexBox column full center>
						<Container backgroundColor="white">
							<FlexBoxItem>
								<H1 margin={['0', '0']}>Button</H1>
							</FlexBoxItem>
							<FlexBoxItem>
								<Divider></Divider>
							</FlexBoxItem>
							<IntroText>
								Buttons are used for interface actions. Primary
								style should be used sparingly per view for main
								call-to-action.
							</IntroText>
							{storyFn()}
						</Container>
					</FlexBox>
				</MainGrid>
			</FullMainLayout>
		),
		withKnobs,
	],
};

export const buttons = () => {
	const label = 'Button Types';
	const options = {
		primary: 'primary',
		secondary: 'secondary',
	};
	const defaultValue = 'primary';
	return (
		<Button
			type={select(label, options, defaultValue)}
			onClick={action('clicked')}
		>
			Default Button
		</Button>
	);
};
