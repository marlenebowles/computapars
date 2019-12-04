import React from 'react';

import styled, {css} from 'styled-components';
import { darken } from 'polished';


const BlockSvg = styled.svg`
    display: block;
    transform-origin: 50% 50%;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    fill: ${({theme}) => theme.colors.secondary};
    &:hover, &focus {
        cursor: pointer;
        ${props => props.hover && css`
            fill: ${darken(.15, props.theme.colors.secondary)};
        `}
    } 
`;

export const BaseSvg = ({
    children,
    role,
    viewBox,
    direction,
    size,
    ...props
}) => (
    <BlockSvg
        xmlns="http://www.w3.org/2000/svg"
        role={role}
        viewBox={viewBox}
        height={size}
        width={size}
        {...props}
    >
        {children}
    </BlockSvg>
);

