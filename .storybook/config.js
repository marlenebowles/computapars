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
	},
});

const req = require.context('../packages', true, /.story.js$/);
configure(req, module);
