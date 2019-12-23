import { themes } from '@computapars/core';
import { ThemeProvider } from 'styled-components';
import { DefaultLayout } from '@computapars/layout';
ThemeProvider.defaultProps = {
	theme: {},
};
export const contexts = [
	{
		icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
		title: 'Themes', // an unique name of a contextual environment
		components: [
			// an array of components that is going to be injected to wrap stories
			ThemeProvider,
		],
		params: [
			// an array of params contains a set of predefined `props` for `components`
			{ name: 'Space', props: { theme: themes.space } },
			{
				name: 'Gallery',
				props: { theme: themes.gallery },
				default: true,
			},
			{
				name: 'Discord',
				props: { theme: themes.discord },
			},
		],
		options: {
			deep: true, // pass the `props` deeply into all wrapping components
			disable: false, // disable this contextual environment completely
			cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
		},
	},
];
