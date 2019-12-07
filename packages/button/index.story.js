import React from 'react';
import Button from './index';
import { H5 } from '@computapars/typography';
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
		<FlexBox column>
			<H5 margin={[spacing.margin.sm, '0']} as="h2">
				Primary
			</H5>
			<FlexBox alignBaseline full margin={[spacing.margin.sm, '0']}>
				<FlexBoxItem
					grow={1}
					margin={['0', spacing.margin.md, '0', '0']}
				>
					<Button
						size="sm"
						type={'primary'}
						onClick={action('CLICKED')}
					>
						Sm Button
					</Button>
				</FlexBoxItem>
				<FlexBoxItem
					grow={1}
					margin={['0', spacing.margin.md, '0', '0']}
				>
					<Button
						size="md"
						type={'primary'}
						onClick={action('CLICKED')}
					>
						Md Button
					</Button>
				</FlexBoxItem>
				<FlexBoxItem grow={1}>
					<Button
						size="lg"
						type={'primary'}
						onClick={action('CLICKED')}
					>
						Lg Button
					</Button>
				</FlexBoxItem>
			</FlexBox>
			<H5 margin={[spacing.margin.sm, '0']} as="h2">
				secondary
			</H5>
			<FlexBox alignBaseline full>
				<FlexBoxItem
					margin={['0', spacing.margin.md, '0', '0']}
					grow={1}
				>
					<Button
						size="sm"
						type={'secondary'}
						onClick={action('CLICKED')}
					>
						sm Button
					</Button>
				</FlexBoxItem>
				<FlexBoxItem
					margin={['0', spacing.margin.md, '0', '0']}
					grow={1}
				>
					<Button
						size="md"
						type={'secondary'}
						onClick={action('CLICKED')}
					>
						md Button
					</Button>
				</FlexBoxItem>
				<FlexBoxItem grow={1}>
					<Button
						size="lg"
						type={'secondary'}
						onClick={action('CLICKED')}
					>
						lg Button
					</Button>
				</FlexBoxItem>
			</FlexBox>
		</FlexBox>
	);
};
