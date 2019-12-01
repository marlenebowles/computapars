import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import baseTheme from './baseTheme';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';
// import { themes } from '@computapars/core';
// import { withThemesProvider } from 'storybook-addon-styled-component-theme';

// addDecorator(withThemesProvider([themes.bossy, themes.space, themes.discord]));

addDecorator(withContexts(contexts));
addDecorator(storyFn => {
	const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800|Source+Sans+Pro:400,700,900');
        @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Lato:400,400i,700,900');
        @import url('https://fonts.googleapis.com/css?family=Oswald:400,500,700&Montserrat+Subrayada:400,700|Montserrat:400,700,900');
    `;
	return (
		<div
			style={{
				paddingTop: '16px',
				paddingLeft: '16px',
			}}
		>
			<GlobalStyle />
			<Normalize />
			{storyFn()}
		</div>
	);
});

addParameters({
	options: {
		showNav: true,
		showPanel: true,
		sidebarAnimations: true,
		isToolshown: true,
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
