import React, { Fragment } from 'react';
import { Input, Label, Form } from './index';
import { SearchIcon } from './../icon';
import Button from './../button';

export default {
	title: 'Form',
};

export const inputs = () => (
	<Fragment>
		<Label>Label</Label>
		<Input placeholder="Input" />
		<Input icon={<SearchIcon size={20} />} placeholder="With Icon Right" />
		<Input disabled />
	</Fragment>
);

export const forms = () => (
	<Form>
		<Label>Email</Label>
		<Input placeholder="Email" />
		<Label>Password</Label>
		<Input placeholder="Password" />
		<Button primary type="submit">
			Submit
		</Button>
	</Form>
);
