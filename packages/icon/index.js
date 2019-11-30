import styled, { css } from 'styled-components';
import { darken } from 'polished';

import {
	AccountCircle,
	Alarm,
	CalendarToday,
	CheckCircle,
	CheckCircleOutline,
	Delete,
	Done,
	DoneOutline,
	Info,
	Launch,
	NoteAdd,
	Today,
	TrendingFlat,
	FastForward,
	FastRewind,
	Loop,
	Search,
	Repeat,
	AddCircle,
	AddCircleOutline,
	Create,
	Clear,
	FilterList,
	Remove,
	RemoveCircle,
	RemoveCircleOutline,
} from 'styled-icons/material';
import {
	Bootstrap,
	Git,
	Github,
	Gitlab,
	Javascript,
	Linkedin,
	LinkedinSquare,
	Nodejs,
	ReactLogo,
	Spotify,
	Soundcloud,
	Youtube,
} from 'styled-icons/boxicons-logos';

const baseIcon = css`
	${props => {
		const color = props.color
			? props.color
			: props.theme.buttons.colors.secondary;
		return css`
			color: ${color};
			${props.hover &&
				`
                :hover,
                :focus {
                    cursor: pointer;
                    color: ${darken(0.15, color)};
            `}
		`;
	}}
`;

export const AccountCircleIcon = styled(AccountCircle)`
	${baseIcon};
`;

export const AlarmIcon = styled(Alarm)`
	${baseIcon};
`;

export const CalendarTodayIcon = styled(CalendarToday)`
	${baseIcon};
`;
export const CheckCircleIcon = styled(CheckCircle)`
	${baseIcon};
`;
export const CheckCircleOutlineIcon = styled(CheckCircleOutline)`
	${baseIcon};
`;
export const DeleteIcon = styled(Delete)`
	${baseIcon};
`;
export const DoneIcon = styled(Done)`
	${baseIcon};
`;
export const DoneOutlineIcon = styled(DoneOutline)`
	${baseIcon};
`;
export const InfoIcon = styled(Info)`
	${baseIcon};
`;
export const LaunchIcon = styled(Launch)`
	${baseIcon};
`;
export const NoteAddIcon = styled(NoteAdd)`
	${baseIcon};
`;
export const TodayIcon = styled(Today)`
	${baseIcon};
`;
export const TrendingFlatIcon = styled(TrendingFlat)`
	${baseIcon};
`;

export const FastForwardIcon = styled(FastForward)`
	${baseIcon};
`;

export const FastRewindIcon = styled(FastRewind)`
	${baseIcon};
`;

export const LoopIcon = styled(Loop)`
	${baseIcon};
`;

export const RepeatIcon = styled(Repeat)`
	${baseIcon};
`;
export const AddCircleIcon = styled(AddCircle)`
	${baseIcon};
`;

export const AddCircleOutlineIcon = styled(AddCircleOutline)`
	${baseIcon};
`;

export const CreateIcon = styled(Create)`
	${baseIcon};
`;

export const ClearIcon = styled(Clear)`
	${baseIcon};
`;
export const FilterListIcon = styled(FilterList)`
	${baseIcon};
`;

export const RemoveIcon = styled(Remove)`
	${baseIcon};
`;

export const RemoveCircleIcon = styled(RemoveCircle)`
	${baseIcon};
`;

export const RemoveCircleOutlineIcon = styled(RemoveCircleOutline)`
	${baseIcon};
`;

export const SearchIcon = styled(Search)`
	${baseIcon};
`;

export const BootstrapIcon = styled(Bootstrap)`
	${baseIcon};
`;

export const GitIcon = styled(Git)`
	${baseIcon};
`;

export const GithubIcon = styled(Github)`
	${baseIcon};
`;

export const GitlabIcon = styled(Gitlab)`
	${baseIcon};
`;

export const JavascriptIcon = styled(Javascript)`
	${baseIcon};
`;

export const LinkedinIcon = styled(Linkedin)`
	${baseIcon};
`;

export const LinkedinSquareIcon = styled(LinkedinSquare)`
	${baseIcon};
`;

export const NodejsIcon = styled(Nodejs)`
	${baseIcon};
`;

export const ReactLogoIcon = styled(ReactLogo)`
	${baseIcon};
`;

export const SoundcloudIcon = styled(Soundcloud)`
	${baseIcon};
`;

export const SpotifyIcon = styled(Spotify)`
	${baseIcon};
`;

export const YoutubeIcon = styled(Youtube)`
	${baseIcon};
`;
