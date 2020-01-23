import React, { Fragment } from 'react';
import { FlexBox } from '@computapars/flex';
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
	EmailIcon,
} from './src/index';

export default {
	title: 'Components | Icon',
};

export const logos = () => (
	<FlexBox
		flexWrap="wrap"
		height="100vh"
		bg="white"
		fontFamily="primary"
		justifyContent="center"
		alignItems="center"
		padding="lg"
	>
		<FlexBox flexWrap="wrap" flexDirection="column" width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<GithubIcon size={80} />
			<LinkedInIcon size={80} />
			<GitlabIcon size={80} />
			<Html5Icon size={80} />
		</FlexBox>
		<FlexBox flexWrap="wrap" flexDirection="column"  width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
			<JavascriptIcon size={80} />
			<NodeJsIcon size={80} />
			<ReactLogoIcon size={80} />
			<ReduxIcon size={80} />
			<SpotifyIcon size={80} />
			<SoundCloudIcon size={80} />
			<InstagramIcon size={80} />		
		</FlexBox>

	</FlexBox>
);

export const material = () => (
	<FlexBox
	flexWrap="wrap"
	height="100vh"
	bg="white"
	fontFamily="primary"
	justifyContent="center"
	alignItems="center"
	padding="lg"
>
	<FlexBox flexWrap="wrap" flexDirection="column" width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
		<CheckIcon size={80} />
		<AlarmIcon size={80} />
		<AccountCircleIcon size={80} />
		<AssignmentIcon size={80} />
		<DeleteIcon size={80} />
		<EmailIcon size={80} />
		<MinimizeIcon size={80} />
		
	</FlexBox>
	<FlexBox flexWrap="wrap" flexDirection="column"  width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}>
	<OpenInNewIcon size={80} />
		<SwapIcon />
		<FilerListIcon size={80} />
		<ClearIcon size={80} />
		<CreateIcon size={80} />
		<AddIcon size={80} />
		<UserAddIcon size={80} />
		<SettingsIcon size={80} />
	</FlexBox>
</FlexBox>
		
);
