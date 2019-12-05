import React, { Fragment } from 'react';
import { GithubIcon, LinkedInIcon, CheckIcon } from './index';

export default {
	title: 'Components | Icon',
};

export const logos = () => (
	<Fragment>
		<GithubIcon hover size={'24'} />
		<LinkedInIcon hover size={'24'} />
	</Fragment>
);

export const material = () => (
	<Fragment>
		<CheckIcon hover size={'24'} />
	</Fragment>
);
