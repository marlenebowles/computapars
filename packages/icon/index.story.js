import React from 'react';
import withStoryContainer from '../../.storybook/withStoryContainer';
import { H5 } from '@computapars/typography';
import { spacing } from '@computapars/core';
import { FlexBox, FlexBoxItem } from '@computapars/flex';

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
	decorators: [
		withStoryContainer({
			header: 'Icon',
			introText: `Icons are used to provide additional meaning or in places where 
            text label doesn’t fit. Icon component allows you to customize the size and color of the icon. Icon also allows a hover prop, which will mimick the hover style of a link.`,
		}),
	],
	parameters: {
		storyContainer: { disabled: false },
		knobs: { disabled: true },
		actions: { disabled: true },
		options: { showPanel: false },
	},
};

export const Icon = () => (
	<FlexBox column>
		<H5 margin={[spacing.margin.sm, '0']} as="h2">
			Logos
		</H5>
		<FlexBox
			responsive
			alignBaseline
			full
			margin={[spacing.margin.sm, '0']}
		>
			<GithubIcon hover size={'40'} />
			<LinkedInIcon hover size={'40'} />
			<GitlabIcon hover size={'40'} />
			<Html5Icon hover size={'40'} />
			<JavascriptIcon hover size={'40'} />
			<NodeJsIcon hover size={'40'} />
			<ReactLogoIcon hover size={'40'} />
			<ReduxIcon hover size={'40'} />
			<SpotifyIcon hover size={'40'} />
			<SoundCloudIcon hover size={'40'} />
			<InstagramIcon hover size={'40'} />
		</FlexBox>
		<H5 margin={[spacing.margin.sm, '0']} as="h2">
			Material
		</H5>
		<FlexBox
			responsive
			alignBaseline
			full
			margin={[spacing.margin.sm, '0']}
		>
			<CheckIcon hover size={'40'} />
			<AlarmIcon hover size={'40'} />
			<AccountCircleIcon hover size={'40'} />
			<AssignmentIcon hover size={'40'} />
			<DeleteIcon hover size={'40'} />
			<MinimizeIcon hover size={'40'} />
			<OpenInNewIcon hover size={'40'} />
			<SwapIcon size={'40'} />
			<FilerListIcon hover size={'40'} />
			<ClearIcon hover size={'40'} />
			<CreateIcon hover size={'40'} />
			<AddIcon hover size={'40'} />
			<UserAddIcon hover size={'40'} />
			<SettingsIcon hover size={'40'} />
		</FlexBox>
	</FlexBox>
);
