import React, { Fragment } from 'react';
import { FlexBox } from './src/index';

export default {
	title: 'Components | Flex',
};

export const FlexBoxFull = () => (
	<FlexBox mt="lg" color="secondary" bg="primary">
		<div>Hello</div>
		<div>World</div>
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
