import React, { Fragment } from 'react';
import { FlexBox } from './src/index';
import { Text } from '@computapars/typography';
export default {
	title: 'Components | Flex',
};

export const FlexBoxFullResponsive = () => (
	<FlexBox
		flexWrap="wrap"
		height="100vh"
		bg="secondary"
		fontFamily="primary"
		padding={20}
	>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<Text>Lorem</Text>
		</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<Text>Ipsum</Text>	
		</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<Text>Dolor</Text>	
		</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<Text>Sit</Text>	
		</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<Text>Amet</Text>	
		</FlexBox>
		<FlexBox width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<Text>Plurum</Text>	
		</FlexBox>
	</FlexBox>
);

export const FlexBoxJustify = () => (
	<FlexBox bg="primary" height={'100vh'} flexDirection="column" justifyContent="center" alignItems="center">
		<FlexBox>
			<Text>Lorem</Text>	
		</FlexBox>
		<FlexBox>
			<Text>Ipsum</Text>	
		</FlexBox>
	</FlexBox>
);
