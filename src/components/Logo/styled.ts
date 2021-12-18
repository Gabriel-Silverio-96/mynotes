import styled from "styled-components";
import { LogoContainerProps } from "./types";

export const LogoContainer = styled.div<LogoContainerProps>`
    width: ${({responsive}) => responsive && "1.875rem"};

    @media (max-width: 650px) {
        svg {
            g[data-name="text-logo"] {
                display: none;
            }
        }
    }
`