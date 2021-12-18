import styled from "styled-components";
import { LoadingContainerProps } from "./types";

export const LoadingContainer = styled.div<LoadingContainerProps>`
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: ${(props => props.align ||  "left")};
    gap: 0.2rem;
    visibility: ${({ isLoading }) => isLoading ? "visible" : "hidden"};

    img {
        width: 1.5rem;
    }

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.textColorParagraph};
        margin-left: 0.2rem;
    }  
`

export const LoadingSvg = styled.div`
    svg {
        animation: rotating 0.8s linear infinite;
        @keyframes rotating {
            from {
                -ms-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -webkit-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            to {
                -ms-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                -o-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    }
`