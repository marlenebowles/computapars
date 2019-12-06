import React from 'react';
import styled, { css } from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';

export const FlexBox = styled(Flex)`
	${props =>
		props.backgroundColor &&
		css`
			background-color: ${props.backgroundColor};
		`}
`;

export const FlexBoxItem = FlexItem;
