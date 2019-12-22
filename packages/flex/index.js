import React from 'react';
import styled, { css } from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import { media } from '@computapars/core';
import { space, layout, color } from 'styled-system';

export const FlexBox = styled(Flex)`
    ${space}
    ${layout}
	${color}
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
	margin: ${space[0]} ${space['auto']};
`;

export const FlexBoxItem = FlexItem;
