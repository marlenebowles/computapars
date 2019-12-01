import React, { Fragment } from 'react';
import { Text, IntroText, FineText, H1, H2, H3, H4, H5, H6 } from './index';

export default {
	title: 'Components | Typography',
};

const Paragraphs = () => (
	<Fragment>
		<IntroText>
			Quasar Euclid dispassionate extraterrestrial observer from which we
			spring rich in heavy atoms worldlets. A mote of dust suspended in a
			sunbeam are creatures of the cosmos corpus callosum shores of the
			cosmic ocean brain is the seed of intelligence great turbulent
			clouds? Radio telescope rings of Uranus invent the universe rings of
			Uranus dream of the mind's eye star stuff harvesting star light.
		</IntroText>
		<Text>
			Star stuff harvesting star light vanquish the impossible not a
			sunrise but a galaxyrise the only home we've ever known hearts of
			the stars tingling of the spine and billions upon billions upon
			billions upon billions upon billions upon billions upon billions.
		</Text>
		<FineText>
			Hearts of the stars globular star cluster light years rings of
			Uranus science network of wormholes. A very small stage in a vast
			cosmic arena worldlets great turbulent clouds kindling the energy
			hidden in matter vanquish the impossible corpus callosum.
		</FineText>
	</Fragment>
);

const Headings = () => (
	<Fragment>
		<H1>We are the legacy of 15 billion years of cosmic evolution.</H1>
		<H2>We are the legacy of 15 billion years of cosmic evolution.</H2>
		<H3>We are the legacy of 15 billion years of cosmic evolution.</H3>
		<H4>We are the legacy of 15 billion years of cosmic evolution.</H4>
		<H5>We are the legacy of 15 billion years of cosmic evolution.</H5>
		<H6>We are the legacy of 15 billion years of cosmic evolution.</H6>
	</Fragment>
);

export const Typography = () => (
	<div>
		<H3>Headings</H3>
		<Headings />
		<H3>Paragraphs</H3>
		<IntroText>
			Paragraphs are blocks of text separated from adjacent blocks by
			blank lines
		</IntroText>
		<Paragraphs />
	</div>
);
