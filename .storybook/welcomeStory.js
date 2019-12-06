import React, { Fragment } from 'react';
import { Text, H1, H3, H5 } from '@computapars/typography';
import { Link } from '@computapars/link';

export default {
	title: 'Computapars | About',
	decorators: [
		storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>,
	],
	parameters: {
		knobs: { disabled: true },
		actions: { disabled: true },
		options: { showPanel: false },
	},
};

export const welcome = () => (
	<Fragment>
		<H1>Computapars</H1>
		<H3>Latin: computa * pars</H3>
		<H5>
			<Link>Source:</Link>
		</H5>
		<Text>
			A reusable component library that is designed and engineered to help
			build personal projects faster.
		</Text>
	</Fragment>
);
