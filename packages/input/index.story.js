import React, { Fragment } from 'react';
import { Input, Label, Form } from './index';
import { SearchIcon } from './../icon';
import Button from './../button';

export default {
	title: 'Form',
};

export const inputs = () => (
	<Fragment>
		<Label for="label-ex">Label</Label>
		<Input id="label-ex" placeholder="Input" />
		<Input icon={<SearchIcon size={20} />} placeholder="With Icon" />
		<Input disabled />
		<Input error={['Email is incorrect']} />
	</Fragment>
);

export const forms = () => (
	<Form>
		<Label for="email">Email</Label>
		<Input id="email" placeholder="Email" />
		<Label for="password">Password</Label>
		<Input id="password" placeholder="Password" />
		<Button primary type="submit">
			Submit
		</Button>
	</Form>
);
