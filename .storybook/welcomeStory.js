import React from 'react';

export default {
	title: 'Welcome',
	decorators: [
		storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>,
	],
	addParameters: {
		panelPosition: 'top',
	},
};

export const welcome = () => <div>Text</div>;
