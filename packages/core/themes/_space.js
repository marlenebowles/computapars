import { typography } from './../_typography';

const fonts = {
	splash: '"Bebas Neue", cursive',
	primary: '"Bebas Neue", cursive',
	secondary: '"Lato", sans-serif',
	code:
		'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
};

const colors = {
	grey1: '#2a2a2a',
	grey2: '#5D5D5D',
	grey3: '#7a7a7a',
	gray4: '#FAFAFA',
	white: '#fff',
	orange1: '#FF462D',
	blue1: '#4076dd',
};

const buttons = {
	font: fonts.primary,
	weight: typography.weight.bold,
	letterSpacing: typography.size.sm,
	colors: {
		primary: colors.orange1,
		secondary: colors.blue1,
	},
};

export const space = {
	name: 'space',
	fonts,
	colors,
	buttons,
};
