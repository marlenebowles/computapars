import React from 'react';
import Button from './index';

export default {
	component: Button,
	title: 'Button',
};

export const primaryButton = () => <Button primary>Primary Button</Button>;

export const secondaryButton = () => (
	<Button secondary>Secondary Button </Button>
);
