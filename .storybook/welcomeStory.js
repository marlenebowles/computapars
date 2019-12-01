import React, { Fragment } from 'react';
import { Text, H1, H3 } from '@computapars/typography';

export default {
	title: 'Welcome',
	decorators: [
		storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>,
	],
	addParameters: {
		panelPosition: 'top',
	},
};

export const welcome = () => (
	<Fragment>
		<H1>Text</H1>
		<Text>Some Text</Text>
	</Fragment>
);
