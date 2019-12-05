import React, { Fragment } from 'react';
import {
	GithubIcon,
	LinkedInIcon,
	CheckIcon,
	GitlabIcon,
	Html5Icon,
	JavascriptIcon,
	NodeJsIcon,
	ReactLogoIcon,
	ReduxIcon,
	SpotifyIcon,
	SoundCloudIcon,
	InstagramIcon,
} from './index';

export default {
	title: 'Components | Icon',
};

export const logos = () => (
	<Fragment>
		<GithubIcon hover size={'24'} />
		<LinkedInIcon hover size={'24'} />
		<GitlabIcon hover size={'24'} />
		<Html5Icon hover size={'24'} />
		<JavascriptIcon hover size={'24'} />
		<NodeJsIcon hover size={'24'} />
		<ReactLogoIcon hover size={'24'} />
		<ReduxIcon hover size={'24'} />
		<SpotifyIcon hover size={'24'} />
		<SoundCloudIcon hover size={'24'} />
		<InstagramIcon hover size={'24'} />
	</Fragment>
);

export const material = () => (
	<Fragment>
		<CheckIcon hover size={'24'} />
	</Fragment>
);
