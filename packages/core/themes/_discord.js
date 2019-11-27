import { typography } from './../_typography';
const fonts = {
	splash: '"Montserrat Subrayada", sans-serif',
	primary: '"Oswald", sans-serif',
	secondary: '"Montserrat", sans-serif',
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

export const discord = {
	name: 'discord',
	fonts,
	colors,
	buttons,
};
