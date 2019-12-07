import React, { Fragment, useState } from 'react';
import {
	Input,
	Form,
	FormGroup,
	FormGroupInline,
	FormGroupItem,
	Checkbox,
} from './index';
import { spacing } from '@computapars/core';
import Button from '@computapars/button';
import { action } from '@storybook/addon-actions';

import { withKnobs, select } from '@storybook/addon-knobs';
import withStoryContainer from '../../.storybook/withStoryContainer';
export default {
	title: 'Components | Form',
};

export const inputs = () => (
	<Form onSubmit={action('SUBMITTED')}>
		<FormGroup>
			<FormGroupItem>
				<Input
					fullwidth
					label="Input"
					id="input-ex"
					placeholder="Input"
				/>
			</FormGroupItem>
		</FormGroup>
		<FormGroupInline margin={['0', '0', spacing.margin.sm, '0']}>
			<FormGroupItem margin={['0', spacing.margin.sm, '0', '0']}>
				<Input label="disabled" id="disabled" disabled />
			</FormGroupItem>
			<FormGroupItem>
				<Input
					label="Error"
					id="error"
					error={['Email is incorrect']}
				/>
			</FormGroupItem>
		</FormGroupInline>
		<FormGroup>
			<FormGroupItem>
				<Button type="submit" type="primary">
					Submit
				</Button>
			</FormGroupItem>
		</FormGroup>
	</Form>
);
inputs.story = {
	decorators: [
		withStoryContainer({
			header: 'Inputs',
			introText: `Inputs are used to allow users to provide text input when the expected input is short. Input component has a
            range of options and supports several text formats including numbers.`,
		}),
		withKnobs,
	],
	parameters: {
		storyContainer: { disabled: true },
	},
};

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

checkBoxes.story = {
	decorators: [
		withStoryContainer({
			header: 'Checkbox',
			introText: `Checkboxes are used to let a user choose one or more options
            from a limited number of options.`,
		}),
		withKnobs,
	],
	parameters: {
		storyContainer: { disabled: true },
	},
};
