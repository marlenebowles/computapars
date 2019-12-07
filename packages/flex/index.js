import React from 'react';
import styled, { css } from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import { media } from '@computapars/core';

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
export const FlexBox = styled(Flex)`
	${baseMargin};
	${props =>
		props.backgroundColor &&
		css`
			background-color: ${props.backgroundColor};
		`}
	${props =>
		props.responsive &&
		css`
			flex-wrap: wrap;
			${media.greaterThan('sm')`
                flex-wrap: nowrap;
            `}
		`}
`;

export const FlexBoxItem = styled(FlexItem)`
	${baseMargin};
`;
