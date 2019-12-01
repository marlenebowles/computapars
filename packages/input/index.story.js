import React, { Fragment, useState } from 'react';
import { Input, Form, FormGroup, FormGroupInline, Checkbox } from './index';
import { spacing } from '@computapars/core';
import { SearchIcon } from './../icon';

import Button from './../button';

export default {
	title: 'Form',
};

export const inputs = () => (
	<Fragment>
		<FormGroup>
			<Input fullwidth label="Input" id="input-ex" placeholder="Input" />
		</FormGroup>
		<FormGroup>
			<Input
				fullwidth
				label="With Icon"
				id="with-icon"
				icon={<SearchIcon size={20} />}
				placeholder="With Icon"
			/>
		</FormGroup>
		<FormGroup>
			<Input label="disabled" id="disabled" disabled />
		</FormGroup>
		<FormGroup>
			<Input label="Error" id="error" error={['Email is incorrect']} />
		</FormGroup>
	</Fragment>
);

export const forms = () => (
	<Form>
		<FormGroup>
			<Input label="Email" fullwidth id="email" placeholder="Email" />
		</FormGroup>
		<FormGroup>
			<Input
				label="Password"
				fullwidth
				id="password"
				placeholder="Password"
			/>
		</FormGroup>
		<FormGroupInline>
			<FormGroup margin={[0, spacing.margin.md, 0, 0]}>
				<Input id="name" label="Name" placeholder="Name" />
			</FormGroup>
			<FormGroup>
				<Button primary type="submit">
					Submit
				</Button>
			</FormGroup>
		</FormGroupInline>
	</Form>
);

export const checkBoxes = () => {
	const [checkedItems, setCheckedItems] = useState({});
	const checkBoxes = [
		{
			name: 'checkbox-1',
			key: 'checkbox1',
			label: 'checkbox 1',
		},
		{
			name: 'checkbox-2',
			key: 'checkbox2',
			label: 'checkbox 2',
		},
	];
	const handleChange = event => {
		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked,
		});
	};
	return (
		<Fragment>
			{checkBoxes.map(item => (
				<FormGroup key={item.key}>
					<Checkbox
						name={item.name}
						key={item.key}
						label={item.label}
						checked={checkedItems[item.name]}
						onChange={handleChange}
					/>
				</FormGroup>
			))}
		</Fragment>
	);
};