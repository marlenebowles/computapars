import styled, { css } from 'styled-components';
import { spacing } from '@computapars/core';

export const Divider = styled.div`
	user-select: none;
	height: 1px;
	margin-bottom: ${spacing.margin.md} !important;
	margin-top: ${spacing.margin.md} !important;
	background: ${props => props.theme.colors.divider};
	display: block;
	width: 100%;
	border: none;
`;
