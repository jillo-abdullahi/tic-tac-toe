import styled from 'styled-components';

type ButtonProps = {
    backgroundColor?: string;
    boxShadowBlur?: number;
    boxShadowColor?: string;
    fontSize?: string;
    hoverBackgroundColor?: string;
    horizontalPadding?: string;
};

export const Button = styled.button<ButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || '#F2B137'};
    box-shadow: inset 0px ${({ boxShadowBlur }) => `${boxShadowBlur || '-8'}px`} 0px
        ${({ boxShadowColor }) => boxShadowColor || '#CC8B13'};
    border-radius: 15px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: ${({ fontSize }) => fontSize || '18px'};
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.25px;
    padding: ${({ horizontalPadding, boxShadowBlur }) =>
        `16px ${horizontalPadding || '150px'} ${16 - (boxShadowBlur ? boxShadowBlur : 8)}px ${
            horizontalPadding || '150px'
        }`};
    color: #1a2a33;
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#FFC860'};
    }
`;
