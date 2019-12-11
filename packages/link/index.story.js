import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Link } from './index';
import withStoryContainer from '../../.storybook/withStoryContainer';
import { FlexBox, FlexBoxItem } from '@computapars/flex';
export default {
	title: 'Components | Link',
	component: Link,
	decorators: [
		withStoryContainer({
			header: 'Link',
			introText: `Links are used in content paragraphs to create pathways 
            from one page to another.`,
		}),
	],
	parameters: {
		storyContainer: { disabled: false },
	},
};
const clickAction = action('CLICKED');

export const link = () => {
	return (
		<FlexBox responsive alignBaseline justifyAround full>
			<FlexBoxItem>
				<Link
					onClick={e => {
						e.preventDefault();
						clickAction(e);
					}}
					type={'primary'}
					label={'Primary Link'}
					href="/"
				/>
			</FlexBoxItem>
			<FlexBoxItem>
				<Link
					onClick={e => {
						e.preventDefault();
						clickAction(e);
					}}
					type={'secondary'}
					label={'Secondary Link'}
					href="/"
				/>
			</FlexBoxItem>
		</FlexBox>
	);
};
