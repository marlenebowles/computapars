import React, { Fragment } from 'react';
import { Button, LinkButton} from './src/index';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Container } from '@computapars/layout';
import {FlexBox} from '@computapars/flex';
import {Text} from '@computapars/typography';
export default {
	component: Button,
	title: 'Components | Button',
	decorators: [withKnobs],
};

export const buttons = () => {
	const label = 'Button Types';
	const options = {
		primary: 'primary',
		secondary: 'secondary',
	};
	const defaultValue = 'primary';
	return (
		<Container>
			<FlexBox width={'100%'} justifyContent="flex-start" alignItems="center"> 
				<FlexBox width={[1 /2, 1/2, 1/4, 1/4]}>
				<Text>Button</Text>
				</FlexBox>
				<FlexBox width={[1 /2, 1/2, 1/4, 1/4]}>
				<Button
					variant={select(label, options, defaultValue)}
					onClick={action('clicked')}

				>
					Lorem Ipsum
				</Button>
				</FlexBox>
			</FlexBox>
			<FlexBox width={'100%'} justifyContent="flex-start"alignItems="center"> 
				<FlexBox width={[1 /2, 1/2, 1/4, 1/4]}>
					<Text>LinkButton</Text>
				</FlexBox>
				<FlexBox width={[1 /2, 1/2, 1/4, 1/4]}>
					<LinkButton>Lorem Ipsum</LinkButton>
				</FlexBox>
			</FlexBox>
		</Container>
	);
};
