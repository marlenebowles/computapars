import React from 'react';
import Button from './src/index';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

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
		<Button
			variant={select(label, options, defaultValue)}
			onClick={action('clicked')}
			height={30}
		>
			Lorem Ipsum
		</Button>
	);
};
