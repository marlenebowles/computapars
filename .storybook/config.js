import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import baseTheme from './baseTheme';
import { Normalize } from 'styled-normalize';

addDecorator(storyFn => (
	<div
		style={{
			paddingTop: '15px',
			paddingLeft: '15px',
		}}
	>
		<Normalize />
		{storyFn()}
	</div>
));

addParameters({
	options: {
		theme: baseTheme,
		showPanel: false,
		isToolshown: false,
		enableShortcuts: false,
	},
});

const loaderFn = () => {
	// const allExports = [require('./welcomeStory.js')];
	const allExports = [];
	const req = require.context('../packages', true, /.story.js$/);
	req.keys().forEach(fname => allExports.push(req(fname)));
	return allExports;
};
configure(loaderFn, module);
