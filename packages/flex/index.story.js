import React, { Fragment } from 'react';
import { FlexBox } from './src/index';
export default {
	title: 'Components | Flex',
};

export const FlexBoxFull = () => (
	<FlexBox
		flexWrap="wrap"
		height="100vh"
		bg="secondary"
		fontFamily="primary"
		padding={20}
	>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>Hello</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>World</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>Hello</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>World</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>Hello</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>World</FlexBox>
	</FlexBox>
);

export const FlexBoxCenter = () => (
	<FlexBox>
		<FlexBox order="2">World</FlexBox>
		<FlexBox order="1">Hello</FlexBox>
	</FlexBox>
);

export const FlexBoxInlineResponsive = () => (
	<Fragment>
		<FlexBox>
			<FlexBox>
				<div order="2">World</div>
				<div order="1">Hello</div>
			</FlexBox>
			<FlexBox>
				<div order="2">World</div>
				<div order="1">Hello</div>
			</FlexBox>
			<FlexBox>
				<div order="2">World</div>
				<div order="1">Hello</div>
			</FlexBox>
		</FlexBox>
	</Fragment>
);

export const FlexBoxJustify = () => (
	<Fragment>
		<FlexBox>
			<div>Hello</div>
			<div>World</div>
		</FlexBox>
	</Fragment>
);
