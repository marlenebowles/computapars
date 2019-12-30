import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Link } from './src/index';

export default {
	title: 'Components | Link',
	component: Link,
};

export const link = () => {
	const options = ['primary', 'secondary'];

	return (
		<Fragment>
			{options.map((variant, index) => (
				<Link
					key={index}
					onClick={action('clicked')}
					color={variant}
					label={'Lorem Ipsum'}
					href="/"
				/>
			))}
		</Fragment>
	);
};
