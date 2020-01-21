const palette = {
	grey1: '#2a2a2a',
	grey2: '#5D5D5D',
	grey3: '#7a7a7a',
	grey4: '#eaeaea',
	grey5: '#FAFAFA',
	white: '#fff',
	orange: '#FF462D',
	blue: '#4076dd',
	black: '#00000',
	red: '#de2362',
	charcoal: '#2E4057',
	coral: '#FF6B5E',
	grey: '#1a1a1a',
	teal: '#224a54',
	calmBlue: '#98bec8',
};

export const gallery = {
	name: 'gallery',
	breakpoints: ['375px', '576px', '768px', '992px', '1200px'],
	space: {
		none: '0rem',
		xs: '0.625rem',
		sm: '1.25rem',
		md: '1.875rem',
		lg: '2rem',
		xl: '3rem',
		auto: 'auto',
	},
	fontSizes: {
		xs: '0.75rem', // 12
		sm: '0.875rem', // 14
		md: '1.15rem', // 18
		lg: '1.25rem', // 20
		xl: '1.50rem', // 24
		xxl: '2.25rem', // 36
		xxxl: '3rem', // 48
		xxxxl: '4.5rem', // 72
	},
	lineHeights: {
		xs: '1.1',
		sm: '1.25',
		md: '1.5',
	},
	letterSpacings: {
		tight: '-.3rem',
		normal: 'normal',
		xs: '-.2rem',
		sm: '-.02rem',
		md: '.1rem',
		lg: '.2rem',
	},
	fontWeights: {
		regular: '400',
		bold: '700',
		extraBold: '800',
		black: '900',
	},
	fonts: {
		splash: '"Inter", Helvetica Neue, Arial, sans-serif',
		primary: '"Inter", Helvetica Neue, Arial, sans-serif',
		secondary: '"Source Serif Pro", serif',
		code:
			'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
	},
	borders: [
		0,
		'1px solid',
		'2px solid',
		'4px solid',
		'8px solid',
		'16px solid',
		'32px solid',
	],
	sizes: {
		width: [16, 32, 64, 128, 256],
		heights: [16, 32, 64, 128, 256],
		minWidth: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
		maxWidths: {
			sm: 540,
			md: 720,
			lg: 960,
			xl: 1140,
		},
		minHeight: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
		maxHeight: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
	},
	radii: {
		sharp: 0,
		pill: '20rem',
		default: '0.25rem',
		circle: '50%',
	},
	colors: {
		error: palette.red,
		input: palette.grey2,
		focus: palette.blue,
		border: palette.grey4,
		text: palette.grey1,
		disabled: palette.grey5,
		divider: palette.grey4,
		primary: palette.charcoal,
		secondary: palette.coral,
		charcoal: palette.charcoal,
		grey: palette.grey,
		teal: palette.teal,
		white: palette.white,
		black: palette.black,
		coral: palette.coral,
		calmBlue: palette.calmBlue,
	},
	mediaQueries: {
		sm: `@media screen and (min-width: ${576}px)`,
		md: `@media screen and (min-width: ${768}px)`,
		lg: `@media screen and (min-width: ${992}px)`,
	},
	buttons: {
		default: {
			color: palette.white,
			backgroundColor: palette.charcoal,
		},
		primary: {
			color: palette.white,
			backgroundColor: palette.charcoal,
		},
		transparent: {
			color: palette.white,
			backgroundColor: 'transparent',
		},
		secondary: {
			color: palette.white,
			backgroundColor: palette.coral,
		},
		danger: {
			color: palette.white,
			backgroundColor: palette.red,
		},
	},
	zIndices: {
		deep: '-9999',
		default: '1',
		masked: '100',
		mask: '200',
		sticky: '300',
		header: '400',
		dropdown: '500',
		overlay: '600',
		spinner: '700',
		modal: '800',
	},
};

// aliases
gallery.breakpoints.sm = gallery.breakpoints[0];
gallery.breakpoints.md = gallery.breakpoints[1];
gallery.breakpoints.lg = gallery.breakpoints[2];
gallery.breakpoints.xl = gallery.breakpoints[3];
