import styled, { css } from 'styled-components';
import { media, spacing } from '@computapars/core';

export const GridContainer = styled.div`
	display: ${props => (props.inline ? 'inline-grid' : 'grid')};
	${props => {
		return css`
			grid-template-columns: repeat(
				${props.cols[1] ? props.cols[1] : 1},
				auto
			);
			grid-column-gap: ${spacing.gutters.md};
			${media.greaterThan('sm')`
                grid-template-columns: repeat(
                    ${props.cols[0]},
                    auto
                );
                grid-column-gap: ${spacing.gutters.sm};
            `}
		`;
	}};
`;
export const GridItem = styled.div`
	${props =>
		props.start &&
		css`
			grid-column-start: ${props.start};
			justify-self: start;
		`}
	${props =>
		props.end &&
		css`
			grid-column-end: ${props.end};
		`}
`;
