import { css } from 'styled-components';

const breakpoints = {
	xs: 375,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

const maxWidths = {
	sm: 540,
	md: 720,
	lg: 960,
	xl: 1140,
};

export const media = {
	lessThan: size => (...args) => {
		return css`
			@media (max-width: ${breakpoints[size]}px) {
				${css(...args)};
			}
		`;
	},
	greaterThan: size => (...args) => {
		return css`
			@media (min-width: ${breakpoints[size]}px) {
				${css(...args)};
			}
		`;
	},
	between: (max, min) => (...args) => {
		return css`
			@media (min-width: ${breakpoints[
					min
				]}px) and (max-width: ${breakpoints[max]}px) {
				${css(...args)}
			}
		`;
	},
	maxWidths,
};
