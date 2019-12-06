import React from 'react';
import styled, { css } from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import { media } from '@computapars/core';

export const FlexBox = styled(Flex)`
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

export const Container = styled.div`
	max-width: 960px;
	margin: 0 auto;
`;

export const FlexBoxItem = FlexItem;
