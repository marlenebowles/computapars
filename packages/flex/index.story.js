import React, { Fragment } from 'react';
import { FlexBox, FlexBoxItem } from './index';
export default {
	title: 'Components | Flex',
};

export const FlexBoxFull = () => (
	<FlexBox full>
		<FlexBoxItem order="2">World</FlexBoxItem>
		<FlexBoxItem order="1">Hello</FlexBoxItem>
	</FlexBox>
);

export const FlexBoxCenter = () => (
	<FlexBox full center>
		<FlexBoxItem order="2">World</FlexBoxItem>
		<FlexBoxItem order="1">Hello</FlexBoxItem>
	</FlexBox>
);

export const FlexBoxInline = () => (
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
