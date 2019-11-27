import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator, addParameters } from '@storybook/react';
import baseTheme from './baseTheme';
import { Normalize } from 'styled-normalize';
import { themes } from "@computapars/core";
import {withThemesProvider} from 'storybook-addon-styled-component-theme';

addDecorator(storyFn => {
	const themeChosen = withThemesProvider(themes)
	return (
		<ThemeProvider theme={themeChosen}>
			<Normalize />
			{storyFn()}
		</ThemeProvider>
	)
});

	

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
