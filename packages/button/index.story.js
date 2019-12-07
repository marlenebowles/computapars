import React from 'react';
import Button from './index';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import withStoryContainer from '../../.storybook/withStoryContainer';

export default {
	component: Button,
	title: 'Components | Button',
	decorators: [
		withStoryContainer({
			header: 'Button',
			introText: `Buttons are used for interface actions.
                Primary style should be used sparingly per view for main call-to-action.`,
		}),
		withKnobs,
	],
	parameters: {
		storyContainer: { disabled: false },
	},
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
			onClick={action('CLICKED')}
		>
			Default Button
		</Button>
	);
};
