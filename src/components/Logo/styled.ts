import styled from "styled-components";
import { ILogoStyled } from "./types/types.styled";

export const Logo = styled.div<ILogoStyled>`
    width: ${({responsive}) => responsive && "1.875rem"};

	g[data-isotype="isotype-logo"] {
		display: none;
	}

    @media (max-width: 650px) {
        svg {
            g[data-name="text-logo"] {
                display: none;
            }
        }
    }
`;