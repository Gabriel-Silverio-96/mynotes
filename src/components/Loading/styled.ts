import styled from "styled-components";
import { LoadingContainerProps } from "./types";

export const LoadingContainer = styled.div<LoadingContainerProps>`
    display: flex;
    align-items: center;
    justify-content: ${(props => props.alignCenter ? "center" : "inherit")};
    gap: 0.2rem;
    visibility: ${({ isLoading }) => isLoading ? "visible" : "hidden"};

    img {
        width: 1.5rem;
    }

    p {
        color: ${props => props.theme.colors.textColorParagraph};
    }  
`