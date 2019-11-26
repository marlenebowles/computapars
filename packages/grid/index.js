import styled, { css } from 'styled-components';
import { media, spacing } from '@computapars/core';
import PropTypes from 'prop-types';

// how do we set up the margins?

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
				props.cols.join('')};
			${media.greaterThan('sm')`
                grid-template-columns: ${props.cols &&
					props.cols[1] &&
					props.cols.join('')};
            `}
		`;
	}};
`;

const BaseGridItem = styled.div`
	${props => {
		return css`
			background-color: ${props.background
				? props.background
				: 'inherit'};
			padding: ${props.padding && props.padding[0]
				? props.padding[0]
				: spacing.padding.sm};
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

export const GridItem = styled(BaseGridItem)`
	${props => {
		return css`
			${props.start &&
				`
                grid-column-start: ${props.start};
                justify-self: start;
            `}
			${props.end &&
				`
                grid-column-end: ${props.end};
            `}
		`;
	}}
`;

FixedGridContainer.propTypes = {
	background: PropTypes.string,
	padding: PropTypes.array,
	cols: PropTypes.array,
	inline: PropTypes.bool,
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
	start: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	align: PropTypes.string,
	justify: PropTypes.string,
};
