import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Link } from './src/index';
import { Container } from '@computapars/layout';
import { FlexBox } from '@computapars/flex';
import { Text } from '@computapars/typography';
export default {
	title: 'Components | Link',
	component: Link,
};

export const link = () => {
	return (
		<Fragment>
			<Container>
				<FlexBox
					width={'100%'}
					justifyContent="flex-start"
					alignItems="center"
				>
					<FlexBox width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]}>
						<Text>Primary</Text>
					</FlexBox>
					<FlexBox width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]}>
						<Link
							onClick={action('clicked')}
							variant={'primary'}
							label={'Lorem Ipsum'}
							href="/"
						/>
					</FlexBox>
				</FlexBox>
				<FlexBox
					width={'100%'}
					justifyContent="flex-start"
					alignItems="center"
				>
					<FlexBox width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]}>
						<Text>Secondary</Text>
					</FlexBox>
					<FlexBox width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]}>
						<Link
							onClick={action('clicked')}
							variant={'secondary'}
							label={'Lorem Ipsum'}
							href="/"
						/>
					</FlexBox>
				</FlexBox>
			</Container>
		</Fragment>
	);
};
