import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { type } from './index';

export const typeSample = () => (
	<div blue onClick={action('button-clicked')}></div>
);
