import React, { Fragment } from 'react';
import { Text, IntroText, FineText, H1, H2, H3, H4, H5, H6 } from './src/index';
import { FlexBox } from '@computapars/flex';
import { Divider } from '@computapars/layout';

export default {
	title: 'Components | Typography',
};

export const Paragraphs = () => (
	<FlexBox
		justifyContent="flex-start"
		alignItems="center"
		flexDirection="column"
		padding="lg"
	>
		<FlexBox flexDirection="column" width={[1]}>
			<H2>IntroText</H2>
			<IntroText>
				Quasar Euclid dispassionate extraterrestrial observer from which we
				spring rich in heavy atoms worldlets. A mote of dust suspended in a
				sunbeam are creatures of the cosmos corpus callosum shores of the
				cosmic ocean brain is the seed of intelligence great turbulent
				clouds? Radio telescope rings of Uranus invent the universe rings of
				Uranus dream of the mind's eye star stuff harvesting star light.
			</IntroText>
		</FlexBox>
		<FlexBox flexDirection="column" width={[1]}>
			<H2>Text</H2>
			<Text>
				Star stuff harvesting star light vanquish the impossible not a
				sunrise but a galaxyrise the only home we've ever known hearts of
				the stars tingling of the spine and billions upon billions upon
				billions upon billions upon billions upon billions upon billions.
			</Text>
		</FlexBox>
		<FlexBox flexDirection="column" width={[1]}>
			<H2>FineText</H2>
			<FineText>
				Star stuff harvesting star light vanquish the impossible not a
				sunrise but a galaxyrise the only home we've ever known hearts of
				the stars tingling of the spine and billions upon billions upon
				billions upon billions upon billions upon billions upon billions.
			</FineText>
		</FlexBox>
	</FlexBox>
);

export const Headings = () => (
	<FlexBox
		justifyContent="flex-start"
		alignItems="center"
		flexDirection="column"
		padding="lg"
	>
		<FlexBox alignItems="center"  width={[1]}>
			<H5 marginY="0" paddingRight="sm">H1</H5>
			<H1>We are the legacy of 15 billion years of cosmic evolution.</H1>
		</FlexBox>
		<FlexBox alignItems="center"  width={[1]}>
			<H5 marginY="0" paddingRight="sm">H2</H5>
			<H2>H2 We are the legacy of 15 billion years of cosmic evolution.</H2>
		</FlexBox>
		<FlexBox alignItems="center"  width={[1]}>
			<H5 marginY="0" paddingRight="sm">H3</H5>
			<H3>H3 We are the legacy of 15 billion years of cosmic evolution.</H3>
		</FlexBox>
		<FlexBox alignItems="center"  width={[1]}>
			<H5 marginY="0" paddingRight="sm">H4</H5>
			<H4>H4 We are the legacy of 15 billion years of cosmic evolution.</H4>
		</FlexBox>
		<FlexBox alignItems="center"  width={[1]}>
			<H5 marginY="0" paddingRight="sm">H5</H5>
			<H5>H5 We are the legacy of 15 billion years of cosmic evolution.</H5>
		</FlexBox>
		<FlexBox alignItems="center"  width={[1]}>
			<H5 marginY="0" paddingRight="sm">H6</H5>
			
			<H6>H6 We are the legacy of 15 billion years of cosmic evolution.</H6>
		</FlexBox>
	</FlexBox>
);
