import styled, { css } from 'styled-components';
import { media, spacing } from '@computapars/core';
import PropTypes from 'prop-types';

const BaseGridContainer = styled.div`
	display: ${props => (props.inline ? 'inline-grid' : 'grid')};
	grid-column-gap: ${spacing.gutters.sm};
	${media.greaterThan('sm')`
        grid-column-gap: ${spacing.gutters.md};
    `}
	${props => {
		return css`
			background-color: ${props.background
				? props.background
				: 'inherit'};
			padding: ${props.padding && props.padding[0]
				? props.padding[0]
				: spacing.padding.sm};
			justify-content: ${props.justify && props.justify};
			align-items: ${props.align && props.align};
			${media.greaterThan('sm')`
                padding: ${
					props.padding && props.padding[1]
						? props.padding[1]
						: spacing.padding.md
				};
            `}
		`;
	}};
`;
export const FluidGridContainer = styled(BaseGridContainer)`
	${props => {
		return css`
			grid-template-columns: repeat(
				${props.cols && props.cols[0] ? props.cols[0] : 0},
				auto
			);
			${media.greaterThan('sm')`
                grid-template-columns: repeat(
                    ${props.cols && props.cols[1]},
                    auto
                );
            `}
		`;
	}};
`;

export const FixedGridContainer = styled(BaseGridContainer)`
	${props => {
		return css`
			grid-template-columns: ${props.cols &&
				props.cols[0] &&
				props.cols[0].join(' ')};
			${media.greaterThan('sm')`
                grid-template-columns: ${props.cols &&
					props.cols[1] &&
					props.cols[1].join(' ')};
            `}
		`;
	}};
`;

export const GridItem = styled.div`
	${props => {
		return css`
			background-color: ${props.background
				? props.background
				: 'inherit'};
			padding: ${props.padding && props.padding[0]
				? props.padding[0]
				: spacing.padding.sm};
			justify-self: ${props.justify && props.justify};
			align-self: ${props.align && props.align};
			${media.greaterThan('sm')`
				padding: ${
					props.padding && props.padding[1]
						? props.padding[1]
						: spacing.padding.md
				};
			`}
		`;
	}}
`;

FixedGridContainer.propTypes = {
	background: PropTypes.string,
	padding: PropTypes.array,
	cols: PropTypes.array,
	align: PropTypes.string,
	justify: PropTypes.string,
};

FluidGridContainer.propTypes = {
	background: PropTypes.string,
	padding: PropTypes.array,
	cols: PropTypes.array,
	inline: PropTypes.bool,
	align: PropTypes.string,
	justify: PropTypes.string,
};

GridItem.propTypes = {
	background: PropTypes.string,
	padding: PropTypes.array,
	align: PropTypes.string,
	justify: PropTypes.string,
};
