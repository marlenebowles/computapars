import { typography } from './../_typography';
const fonts = {
	splash: '"Montserrat Subrayada", sans-serif',
	primary: '"Oswald", sans-serif',
	secondary: '"Montserrat", sans-serif',
	code:
		'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
};

const palette = {
	grey1: '#2a2a2a',
	grey2: '#5D5D5D',
	grey3: '#7a7a7a',
	grey4: '#eaeaea',
	grey5: '#FAFAFA',
	white: '#fff',
	orange1: '#FF462D',
	blue1: '#4076dd',
};

const colors = {
	error: '#',
	success: '#',
	input: palette.grey2,
	focus: palette.blue1,
	border: palette.grey4,
	text: palette.grey1,
	disabled: palette.grey5,
	divider: palette.grey4,
};

const buttons = {
	font: fonts.primary,
	weight: typography.weight.bold,
	letterSpacing: typography.size.sm,
	colors: {
		primary: palette.orange1,
		secondary: palette.blue1,
	},
};

export const discord = {
	name: 'discord',
	fonts,
	colors,
	buttons,
};
