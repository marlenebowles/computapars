import React from 'react';
import styled, { css } from 'styled-components';
import { CheckIcon } from '@computapars/icon';
import { lighten, darken, hideVisually } from 'polished';
import { space, width } from 'styled-system';

const InputField = styled.input`
	${width}
	${space}
	${props => css`
		font-family: ${props.theme.fonts.secondary};
		color: ${props.theme.colors.input};
		border: 1px solid ${props.theme.colors.border};
		padding-left: ${props.theme.space.md};
		border-radius: ${props.theme.radii.default};
	`}
	${props =>
		props.error &&
		css`
			border: 1px solid ${props.theme.colors.error};
		`};
	padding-right: ${props => (props.icon ? props.theme.space.md : props.theme.space.md)};
	outline: 0;
	padding-top: 0;
	padding-bottom: 0;
	background-color: white;
	transition: all .3s ease-in-out;
	&:focus {
		outline-offset: ${props => props.theme.radii.default};
		border: 1px solid
			${props =>
				props.error
					? props.theme.colors.error
					: lighten(0.2, props.theme.colors.focus)};
	}
	&:disabled {
		background-color: ${props => darken(0.02, props.theme.colors.disabled)};
	}
`;

export const ErrorText = styled.div`
	${({theme}) => css`
		color: ${theme.colors.error};
		font-size: ${theme.fontSizes.xs};
		font-family: ${theme.fonts.secondary};
	`}	
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const IconWrapper = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const FormGroup = styled.div`
	${space}
	display: flex;
	flex-direction: column;
    flex-wrap: wrap;
	position: relative;
`;

export const FormGroupInline = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	flex-wrap: wrap;
`;

export const Label = styled.label`
	${space}
	${({theme}) => css`
		line-height: ${theme.lineHeights.sm};
		color: ${theme.colors.text};
		font-family: ${theme.fonts.primary};
		font-size: ${theme.fontSizes.md};
		font-weight: ${theme.fontWeights.bold};
	`}

	text-transform: uppercase;
`;
export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	position: relative;
`;

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	${hideVisually()}
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid ${props => props.theme.colors.border};
    background: ${props => (props.checked ? props.theme.colors.focus : 'white')}
    border-radius: 3px;
    transition: all 150ms;
    margin-right: ${space[1]};
    ${HiddenCheckbox}:focus + & {
        ${props => {
			return css`
				${!props.checked
					? `box-shadow: 0 0 0 1px ${props.theme.colors.secondary}`
					: ''};
			`;
		}}
`;
const CheckIconRef = styled(CheckIcon)`
	visibility: ${props => (props.checked ? 'visible' : 'hidden')};
`;

export const Checkbox = ({ checked, ...props }) => (
	<Label htmlFor={props.id}>
		<CheckboxContainer>
			<HiddenCheckbox checked={checked || false} {...props} />
			<StyledCheckbox checked={checked || false}>
				<CheckIconRef
					fill={'white'}
					checked={checked || false}
					size={16}
				/>
			</StyledCheckbox>
		</CheckboxContainer>
		{props.label}
	</Label>
);

export const Input = props => {
	return (
		<InputGroup {...props}>
			<Label htmlFor={props.id}>{props.label}</Label>
			<InputWrapper>
				{props.icon && <IconWrapper>{props.icon}</IconWrapper>}
				<InputField {...props} />
				{props.error && <ErrorText>{props.error}</ErrorText>}
			</InputWrapper>
		</InputGroup>
	);
};
