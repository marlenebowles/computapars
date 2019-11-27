import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import baseTheme from './baseTheme';
import { Normalize } from 'styled-normalize';
import { themes } from '@computapars/core';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

addDecorator(withThemesProvider([themes.space, themes.bossy, themes.pharmacy]));
addDecorator(storyFn => (
	<Fragment>
		<Normalize />
		{storyFn()}
	</Fragment>
));

addParameters({
	options: {
		isToolshown: false,
		enableShortcuts: false,
		theme: baseTheme,
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
