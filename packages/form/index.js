import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { CheckIcon } from '@computapars/icon';
import { border, spacing, typography, animations } from '@computapars/core';
import { lighten, darken, hideVisually } from 'polished';

const baseMargin = css`
	${props =>
		props.margin &&
		props.margin.length === 4 &&
		css`
			margin-top: ${props.margin[0]};
			margin-right: ${props.margin[1]};
			margin-bottom: ${props.margin[2]};
			margin-left: ${props.margin[3]};
		`}
	${props =>
		props.margin &&
		props.margin.length === 2 &&
		css`
			margin: ${props.margin[0]} ${props.margin[1]};
		`}
`;

const InputField = styled.input`
	font-family: ${props => props.theme.fonts.secondary};
	color: ${props => props.theme.colors.input};
	height: 40px;
	width: ${props => (props.fullwidth ? '100%' : 'inherit')};
	border: 1px solid ${props => props.theme.colors.border};
	${props =>
		props.error &&
		css`
			border: 1px solid ${props.theme.colors.error};
		`};
	background-color: white;
	padding-top: 0;
	padding-bottom: 0;
	padding-left: ${spacing.padding.md};
	padding-right: ${props =>
		props.icon ? spacing.padding.xl : spacing.padding.md};
	outline: 0;
	border-radius: ${border.radius.default};
	&:focus {
		outline-offset: -${border.radius.default};
		border: 1px solid
			${props =>
				props.error
					? props.theme.colors.error
					: lighten(0.2, props.theme.colors.focus)};
	}
	&:disabled {
		background-color: ${props => darken(0.02, props.theme.colors.disabled)};
	}
	transition: ${animations.all};
`;

export const ErrorText = styled.div`
	color: ${props => props.theme.colors.error};
	font-size: ${typography.size.xs};
	font-family: ${props => props.theme.fonts.secondary};
	margin-top: ${spacing.margin.xs};
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
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin-bottom: ${spacing.margin.md};

	${props =>
		props.margin &&
		css`
			${baseMargin}
		`}
	position: relative;
`;

export const FormGroupItem = styled.div`
	${baseMargin};
	flex: 1;
`;

export const FormGroupInline = styled.div`
	display: flex;
	flex-direction: row;
	align-items: baseline;
	flex-wrap: wrap;
	margin-bottom: ${spacing.margin.md};
	${props =>
		props.margin &&
		css`
			${baseMargin}
		`}
`;

export const Label = styled.label`
	color: ${props => props.theme.colors.text};
	font-family: ${props => props.theme.fonts.primary};
	font-size: ${typography.size.md};
	font-weight: ${typography.weight.bold};
	margin-bottom: ${spacing.margin.sm};
	text-transform: uppercase;
	line-height: ${typography.lineHeight.sm};
`;
export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	position: relative;
	${baseMargin};
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
    margin-right: ${spacing.margin.sm};
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
		<InputGroup>
			<Label htmlFor={props.id}>{props.label}</Label>
			<InputWrapper>
				{props.icon && <IconWrapper>{props.icon}</IconWrapper>}
				<InputField {...props} />
				{props.error && <ErrorText>{props.error}</ErrorText>}
			</InputWrapper>
		</InputGroup>
	);
};
