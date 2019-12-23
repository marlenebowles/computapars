import React, { Fragment } from 'react';
import {
	GithubIcon,
	LinkedInIcon,
	GitlabIcon,
	Html5Icon,
	JavascriptIcon,
	NodeJsIcon,
	ReactLogoIcon,
	ReduxIcon,
	SpotifyIcon,
	SoundCloudIcon,
	InstagramIcon,
	CheckIcon,
	AlarmIcon,
	AccountCircleIcon,
	AssignmentIcon,
	DeleteIcon,
	MinimizeIcon,
	OpenInNewIcon,
	SwapIcon,
	FilerListIcon,
	ClearIcon,
	CreateIcon,
	AddIcon,
	UserAddIcon,
	SettingsIcon,
} from './index';

export default {
	title: 'Components | Icon',
};

export const logos = () => (
	<Fragment>
		<GithubIcon hover />
		<LinkedInIcon hover />
		<GitlabIcon hover />
		<Html5Icon hover />
		<JavascriptIcon hover />
		<NodeJsIcon hover />
		<ReactLogoIcon hover />
		<ReduxIcon hover />
		<SpotifyIcon hover  />
		<SoundCloudIcon hover />
		<InstagramIcon hover />
	</Fragment>
);

export const material = () => (
	<Fragment>
		<CheckIcon hover />
		<AlarmIcon hover />
		<AccountCircleIcon hover />
		<AssignmentIcon hover />
		<DeleteIcon hover />
		<MinimizeIcon hover />
		<OpenInNewIcon hover />
		<SwapIcon />
		<FilerListIcon hover />
		<ClearIcon hover />
		<CreateIcon hover />
		<AddIcon hover />
		<UserAddIcon hover />
		<SettingsIcon hover />
	</Fragment>
);
