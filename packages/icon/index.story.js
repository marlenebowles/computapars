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
		<AlarmIcon hover size={'24'} />
		<AccountCircleIcon hover size={'24'} />
		<AssignmentIcon hover size={'24'} />
		<DeleteIcon hover size={'24'} />
		<MinimizeIcon hover size={'24'} />
		<OpenInNewIcon hover size={'24'} />
		<SwapIcon size={'24'} />
		<FilerListIcon hover size={'24'} />
		<ClearIcon hover size={'24'} />
		<CreateIcon hover size={'24'} />
		<AddIcon hover size={'24'} />
		<UserAddIcon hover size={'24'} />
		<SettingsIcon hover size={'24'} />
	</Fragment>
);
