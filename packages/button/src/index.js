import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { variant, height, color } from 'styled-system';

const BaseButton = styled.button`
    ${height}
    ${({theme}) => css`
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
        }
    })}
	border: none;
	padding: 0.25em 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background .3s ease-out, color .3s ease-out, opacity .3s ease-out;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Button = styled(BaseButton)`
    ${props => props.variant == 'primary' &&
        css`
            :hover, :focus {
                background: ${darken(0.15, props.theme.colors.primary)};
            }
    `}
    ${props => props.variant == 'secondary' &&
		css`
			:hover, :focus {
                background: ${darken(0.15, props.theme.colors.secondary)};
			}
	`};
`;


export const LinkButton = styled('button')`
    ${height}
    ${color}
    border: none;
	transition: all .3s ease-out, color .3s ease-out, opacity .3s ease-out;
    cursor: pointer;
    text-transform: capitalize;
    outline: none;
    ${({theme}) => css`
        font-family: ${theme.fonts.primary};
        font-weight: ${theme.fontWeights.bold};
        letter-spacing: normal;

    `}
`;
