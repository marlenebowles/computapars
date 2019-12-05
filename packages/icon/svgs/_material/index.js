import React from 'react';
import { BaseSvg } from './../BaseSvg';

export const Check = ({ ...props }) => (
	<BaseSvg viewBox="0 0 24 24" {...props}>
		<title>Check icon</title>
		<path fill="none" d="M0 0h24v24H0z"></path>
		<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
	</BaseSvg>
);
