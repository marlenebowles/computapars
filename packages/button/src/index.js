import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { variant, height, color, typography, space } from 'styled-system';

const BaseButton = styled.button`
    ${height}
    ${space}
    ${({ theme }) => css`
		border-radius: ${theme.radii.default};
		font-family: ${theme.fonts.primary};
		font-weight: ${theme.fontWeights.bold};
		letter-spacing: ${theme.letterSpacings.md};
	`}
    ${variant({
		variants: {
			primary: {
				color: 'white',
				bg: 'primary',
			},
			secondary: {
				color: 'white',
				bg: 'secondary',
			},
			transparent: {
				color: 'white',
				bg: 'transparent',
			},
		},
	})}
	border: none;
	padding: 0.25em 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all .3s ease-out, color .3s ease-out, opacity .3s ease-out;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Button = styled(BaseButton)`
	${props =>
		props.variant == 'primary' &&
		css`
			:hover,
			:focus {
				background: ${darken(0.05, props.theme.colors.primary)};
			}
		`}
        ${props =>
			props.variant == 'transparent' &&
			css`
				border: 1px solid white;
				:hover,
				:focus {
					color: white;
					border: 1px solid ${darken(0.2, 'white')};
				}
			`}
	${props =>
		props.variant == 'secondary' &&
		css`
			:hover,
			:focus {
				background: ${darken(0.15, props.theme.colors.secondary)};
			}
		`};
`;

export const LinkButton = styled('button')`
    ${height}
    ${color}
    ${typography}
    border: none;
	transition: all .3s ease-out, color .3s ease-out, opacity .3s ease-out;
    cursor: pointer;
    text-transform: capitalize;
    outline: none;
    ${({ theme }) => css`
		font-family: ${theme.fonts.primary};
		font-weight: ${theme.fontWeights.bold};
		letter-spacing: normal;
	`}
    ${props =>
		props.bg &&
		props.color &&
		props.color !== 'white' &&
		css`
			&:hover,
			&:focus {
				color: ${darken(0.15, props.theme.colors[props.color])};
			}
		`}}
`;
