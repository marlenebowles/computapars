import React, { Fragment } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Link } from './index';

export default {
	title: 'Components | Link',
	component: Link,
	decorators: [withKnobs],
};

export const link = () => {
	const label = 'Link Types';
	const options = {
		primary: 'primary',
		secondary: 'secondary',
	};
	const defaultValue = 'primary';
	return (
		<Fragment>
			<Link
				onClick={action('clicked')}
				color={select(label, options, defaultValue)}
				label={'Lorem Ipsum'}
				href="/"
			/>
		</Fragment>
	);
};
