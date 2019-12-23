import React, { Component, Fragment, useState } from 'react';
import { Input, Form, FormGroup, FormGroupInline, Checkbox } from './index';

export default {
	title: 'Components | Form',
};

export const inputs = () => (
	<Fragment>
		<FormGroup>
			<Input label="Input" id="input-ex" placeholder="Input" />
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
			<Input label="Email" id="email" placeholder="Email" />
		</FormGroup>
		<FormGroup>
			<Input
				label="Password"

				id="password"
				placeholder="Password"
			/>
		</FormGroup>
		<FormGroupInline>
			<FormGroup margin={[0, 'md', 0, 0]}>
				<Input
					id="first-name"
					label="First Name"
					placeholder="First Name"
				/>
			</FormGroup>
			<FormGroup>
				<Input
					id="last-name"
					label="Last Name"
					placeholder="Last Name"
				/>
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
