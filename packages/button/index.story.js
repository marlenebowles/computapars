import React from 'react';
import Button from './index';
import { spacing } from '@computapars/core';
import { FlexBox, FlexBoxItem } from '@computapars/flex';
import { action } from '@storybook/addon-actions';
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
	],
	parameters: {
		storyContainer: { disabled: false },
	},
};

export const basic = () => {
	return (
		<FlexBox>
			<FlexBoxItem margin={['0', spacing.margin.md, '0', '0']}>
				<Button type={'primary'} onClick={action('CLICKED')}>
					Primary Button
				</Button>
			</FlexBoxItem>
			<FlexBoxItem>
				<Button type={'secondary'} onClick={action('CLICKED')}>
					secondary Button
				</Button>
			</FlexBoxItem>
		</FlexBox>
	);
};
