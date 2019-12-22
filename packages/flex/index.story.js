import React, { Fragment } from 'react';
import { FlexBox, FlexBoxItem } from './index';

export default {
	title: 'Components | Flex',
};

export const FlexBoxFull = () => (
	<FlexBox mt={3} color="secondary" bg="primary" full>
		<FlexBoxItem>World</FlexBoxItem>
		<FlexBoxItem>Hello</FlexBoxItem>
	</FlexBox>
);

export const FlexBoxCenter = () => (
	<FlexBox full center>
		<FlexBoxItem order="2">World</FlexBoxItem>
		<FlexBoxItem order="1">Hello</FlexBoxItem>
	</FlexBox>
);

export const FlexBoxInlineResponsive = () => (
	<Fragment>
		<FlexBox responsive full>
			<FlexBox full inline>
				<FlexBoxItem order="2">World</FlexBoxItem>
				<FlexBoxItem order="1">Hello</FlexBoxItem>
			</FlexBox>
			<FlexBox full inline>
				<FlexBoxItem order="2">World</FlexBoxItem>
				<FlexBoxItem order="1">Hello</FlexBoxItem>
			</FlexBox>
			<FlexBox full inline>
				<FlexBoxItem order="2">World</FlexBoxItem>
				<FlexBoxItem order="1">Hello</FlexBoxItem>
			</FlexBox>
		</FlexBox>
	</Fragment>
);

export const FlexBoxJustify = () => (
	<Fragment>
		<FlexBox justifyEnd>
			<FlexBoxItem>Hello</FlexBoxItem>
			<FlexBoxItem>World</FlexBoxItem>
		</FlexBox>
	</Fragment>
);
