import { create } from '@storybook/theming/create';

export default create({
	base: 'light',
	colorPrimary: 'hotpink',
	colorSecondary: '#2b2b2b',
	// UI
	appBg: 'rgb(255, 255, 255)',
	appContentBg: 'white',
	appBorderColor: 'white',
	appBorderRadius: 0,
	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',
	// Text colors
	textColor: '#2b2b2b',
	textInverseColor: 'white',
	// Toolbar default and active colors
	barTextColor: '#2b2b2b',
	barSelectedColor: '#2b2b2b',
	barBg: 'rgb(255, 255, 255)',
	// Form colors
	inputBg: 'white',
	inputBorder: 'silver',
	inputTextColor: 'black',
	inputBorderRadius: 4,
	brandTitle: 'Computapars',
	brandUrl: 'https://computapars.marlenebowles.now.sh',
	brandImage: '',
});
