import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { border, spacing, typography, animations } from '@computapars/core';
import { lighten, darken } from 'polished';

const InputField = styled.input`
	font-family: ${props => props.theme.fonts.secondary};
	color: ${props => props.theme.colors.input};
	height: 40px;
	width: ${props => (props.fullwidth ? '100%' : 'auto')};
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

export const Label = styled.label`
	color: ${props => props.theme.colors.text};
	font-family: ${props => props.theme.fonts.primary};
	font-size: ${typography.size.md};
	font-weight: ${typography.weight.bold};
	margin-bottom: ${spacing.margin.sm};
	text-transform: uppercase;
	line-height: ${typography.lineHeight.sm};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
    flex-wrap: wrap;
    ${props =>
		props.margin &&
		css`
			margin-top: ${props => (props.margin[0] ? props.margin[0] : '0')};
			margin-right: ${props => (props.margin[1] ? props.margin[1] : '0')};
			margin-left: ${props => (props.margin[3] ? props.margin[3] : '0')};
		`}
	margin-bottom: ${props =>
		props.margin && props.margin[1] ? props.margin[1] : spacing.margin.md};
	position: relative;
`;

export const InputGroup = styled.div`
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

export const Input = props => {
	return (
		<InputGroup {...props}>
			<Label for={props.id}>{props.label}</Label>
			<InputWrapper>
				{props.icon && <IconWrapper>{props.icon}</IconWrapper>}
				<InputField {...props} />
				{props.error && <ErrorText>{props.error}</ErrorText>}
			</InputWrapper>
		</InputGroup>
	);
};
