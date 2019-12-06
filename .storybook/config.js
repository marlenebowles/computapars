import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import baseTheme from './baseTheme';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';

addDecorator(withContexts(contexts));
addDecorator(storyFn => {
	const theme = storyFn().props.theme;
	const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800|Source+Sans+Pro:400,700,900');
        @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Lato:400,400i,700,900');
        @import url('https://fonts.googleapis.com/css?family=Oswald:400,500,700&Montserrat+Subrayada:400,700|Montserrat:400,700,900');
        body {
            font-family: ${theme.fonts.secondary};
        }
    `;
	return (
		<Fragment>
			<GlobalStyle />
			<Normalize />
			{storyFn()}
		</Fragment>
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
	const allExports = [require('./welcomeStory.js')];
	const req = require.context('../packages', true, /.story.js$/);
	req.keys().forEach(fname => allExports.push(req(fname)));
	return allExports;
};
configure(loaderFn, module);
